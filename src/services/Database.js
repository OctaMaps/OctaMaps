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
                data.push(item.doc)
            })
            return data
        }catch(error){
            console.log(error)
        }
    }
    
    migration = () => {
    this.database.allDocs({
        include_docs: true,
        attachments: true,
    })
    .then(docs => {
        this.rows = docs.total_rows
        if (this.rows>0){
            console.log(this.rows)
        }else{
            console.log(this.rows)
            let counter = 0
            this.connectionAPI.getData(credentials.apiURL)
            .then((response) => { 
                this.dataFromAPI = response 
                this.dataFromAPI.forEach((item) => {
                    counter++
                    this.database.put({
                        _id: counter.toString(),
                        codigo_sala: item.codigo_sala,
                        numero_piso: item.numero_piso,
                        titulo_bloco: item.titulo_bloco,
                        titulo_campus: item.titulo_campus,
                        titulo_sala:item.titulo_sala
                    })
                    .then(() => console.log('sucesso'))
                    .catch(e => console.log(e))
                })
            })
            .catch(e =>{ console.log(e) })

        }
    })
    }      
    
    destroy = () => {
        this.database.destroy()
        .then(response => console.log(response))
        .catch( e => console.log(e))
    }

    
}

export default Database