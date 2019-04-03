import PouchDB from 'pouchdb-react-native'
import ConnAPI from "./ConnAPI"

const credentials = require("../credentials/credentials.json")

class Database{
    constructor(name){
        this.database = new PouchDB(name)
        this.connectionAPI = new ConnAPI()
        this.dataFromAPI = []
    }

    getData = async () => {
        let data = []
        const response = await this.database.allDocs()
        response.rows.forEach(item => {
            if (item.doc._id !== "updateVersionID"){
                data.push(item.doc)
            }  
        })
        return data
    }

    deleteAllData = async () => {
        try{
            const response = await this.database.allDocs()
            response.rows.forEach(item => {
                this.database.remove(item.doc)
            })
        }catch(error){
            console.log("Erro ao deletar todos os arquivos: " + error)
        }
    }

   migration = async () => {
        docs = await this.database.allDocs({
            include_docs: true,
            attachments: true,    
        })
        if(docs.total_rows<=0){
            try{
                response = await this.connectionAPI.getData(credentials.getDataURL)
                updateVersionID = await this.connectionAPI.getUpdateVersionID(credentials.getUpdateURL)
            }catch(error){
                response = undefined
                updateVersionID = undefined
                console.log("Erro ao obter os dados: " + error)
            }
            if (response){
                response.forEach(item => {
                    let { _id, codigo_sala, numero_piso, titulo_bloco, titulo_campus, titulo_sala } = item
                    this.database.put({ 
                        _id, codigo_sala, numero_piso, titulo_bloco, titulo_campus, titulo_sala
                    }, (error) => { 
                            if(error){throw(error)} 
                        }
                    )
                })
            }
            if (updateVersionID){
                try{
                    await this.database.put({
                        _id: "updateVersionID",
                        updateVersionID: updateVersionID 
                    })
                }catch(error){
                    console.log("Erro ao inserir 'UpdateVersionID' no Banco de Dados: " + error)
                }
            }
        }
   }
   
   getUpdateVersionID = async () => {
       try{
            response = await this.database.get("updateVersionID")
            return response.updateVersionID
       }catch(error){
           try{
           await this.deleteAllData()
           await this.migration()
           }catch(error){
               console.log("Erro ao tentar atualizar os dados após tentar obter 'UpdateVersionID': " + error)
           }
        }
   }

    destroy = () => {
        this.database.destroy()
        .then(response => console.log(response))
        .catch( e => console.log(e))
    }

    checkUpdate = async (updateVersionID) => {
        try{
            let response = await this.connectionAPI.getUpdateVersionID(credentials.getUpdateURL)
            response = parseInt(response)
            if (response > updateVersionID){
                response = await this.deleteAllData()
                response = await this.migration()
            }
        }catch(error){
            console.log("Erro ao atualizar dados: " + error)
        }   
    }

    
}

export default Database