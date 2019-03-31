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
        try{
            const response = await this.database.allDocs()
            response.rows.forEach(item => {
                if (item.doc._id !== "updateVersionID"){
                    data.push(item.doc)
                }  
            })
            return data
        }catch(error){
            throw(error)
        }
    }

    deleteAllData = async () => {
        try{
            const response = await this.database.allDocs()
            response.rows.forEach(item => {
                this.database.remove(item.doc)
            })
        }catch(error){
            throw(error)
        }
    }

   migration = async () => {
       try{
            docs = await this.database.allDocs({
                include_docs: true,
                attachments: true,    
            })
        }catch(error){
            throw(error)
        }
        if(docs.total_rows<=0){
            try{
                response = await this.connectionAPI.getData(credentials.getDataURL)
                updateVersionID = await this.connectionAPI.getUpdateVersionID(credentials.getUpdateURL)
            }catch(error){
                response = undefined
                updateVersionID = undefined
                throw(error)
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
                this.database.put({
                    _id: "updateVersionID",
                    updateVersionID: updateVersionID 
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
            }
        }
   }
   
   getUpdateVersionID = async () => {
       try{
            response = await this.database.get("updateVersionID")
            return response.updateVersionID
       }catch(error){
           this.deleteAllData()
           this.migration()
           throw(error)
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
            console.log(response)
            console.log(updateVersionID)
            if (response > updateVersionID){
                response = await this.deleteAllData()
                response = await this.migration()
            }
        }catch(error){
            throw(error)
        }   
    }

    
}

export default Database