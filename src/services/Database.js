import PouchDB from "pouchdb-react-native"
const API = require('./API')
const arraySync = require('../utils/arraySync')

function Database(name){

  const database = new PouchDB(name)
  const APIConn = API()

  destroy = async () => {
    database.destroy()
  }

  insert = async ({ _id, codigo_sala, numero_piso, titulo_bloco, titulo_campus, titulo_sala, _rev }) => {
    if(_rev){
      response = await database.put({
        _id, _rev, codigo_sala, numero_piso, titulo_bloco, titulo_campus, titulo_sala
      })
    }else{
      await database.put({
        _id, codigo_sala, numero_piso, titulo_bloco, titulo_campus, titulo_sala
      })
    }
  }

  getAllDocsID = async () => {
    const response = await database.allDocs({
      include_docs: false,
      attachments: false,
    })
    const docs = response.rows.filter(item => item.id !== "updateVersionID")
    const docsID = docs.map(item => item.id )
    return docsID
  }

  getAllDocs = async () => {
    const rawDocs = await database.allDocs({
      include_docs: true,
      attachments: false,
    })
    let docs = rawDocs.rows.filter(item => item.doc._id !== "versionCode")
    docs = docs.map(item => item.doc)
    return docs
  }

  setData = async (docsAPI, versionCode, func) => {
    try{
      if (docsAPI){
        switch(func){
          case 'update':
            try{
              const docsDB = await getAllDocs()
              const differences = await arraySync(docsDB, docsAPI, '_id')
              
              differences.removed.forEach(async item => {
                  await database.remove(item._id, item._rev)      
              }) 
              differences.created.forEach(async item => {
                  await insert(item)
              })
              differences.changed.forEach(async updateItem => {
                  sourceItem = await database.get(updateItem._id)
                  updateItem._rev = sourceItem._rev
                  await insert(updateItem)
              })
              
            }catch(error){
              throw new Error(error)
            }
          break
          case 'insert':
            docsAPI.forEach(async item => {
              insert(item) 
            })
          break 
        }
        
      }else{
        throw new Error("Sem dados para inserir")
      }
      if(versionCode){
        switch(func){
          case 'update':
            versionCodeDB = await database.get('versionCode')
            database.put({
              _id: 'versionCode',
              _rev: versionCodeDB._rev,
              versionCode: versionCode
            })
            break
          case 'insert':
            database.put({
              _id: 'versionCode',
              versionCode: versionCode
            })
            .then(message => console.log(message))
            .catch(error => console.log(error))
          break
        }
      }else{
        throw new Error("Sem 'versionCode' para inserir")
      }
    }catch(error){
      throw('Erro: '+error)
    }
  }

  migration = async () => {
    docs = await database.allDocs({
      include_docs: false,
      attachments: false,
    })
    console.log(docs.total_rows)
    if(docs.total_rows<=0){
      const {data, versionCode} = await APIConn.setData()
      docs = data
      await setData(docs, versionCode, 'insert')
    }
  }

  update = async (docs, versionCode) => {
    await setData(docs, versionCode, 'update')
    console.log('Atualizado, eu acho')
  }

  checkUpdate = async () => {

    const { versionCode} = await APIConn.setData(false, true)
    versionCodeAPI = versionCode
    versionCodeDB = await database.get('versionCode')
    versionCodeDB = versionCodeDB.versionCode
    console.log(versionCodeAPI, versionCodeDB)
    if (versionCodeAPI > versionCodeDB){
      const { data } = await APIConn.setData(true, false)
      docs = data
      console.log('Atualizando...')
      await update(docs, versionCodeAPI)
    }
  }
  return{ migration, checkUpdate, getAllDocs}
}

module.exports = Database