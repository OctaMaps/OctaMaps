import axios from 'axios'
const credentials = require("../credentials/credentials.json")

function API(){
  getData = async ( url ) => {
    try{
      const response = await axios.get(url)
      if (response.data.result){
        return response.data.result
      }else{
        return response.data
      }
    }catch(error){
      return new Error(error)
    }
  }

  setData = async (downloadData = true, downloadVersionCode = true) => {
    try{
      if (downloadData) data = await getData(credentials.getDataURL)
      if (downloadVersionCode) versionCode = await getData(credentials.getUpdateURL)
      return{ data,versionCode }
    }catch(error){
      throw new Error(error)
    }
  }
  return{ setData }
}

module.exports = API