import axios from 'axios'

class ConnAPI{

  getData = async (url) => {
    try{
      const response = await axios.get(url)
      return(response.data.result)
    }catch(error){
      throw(error)
    }
}

  getUpdateVersionID = async (url) => {
    try{
      const response = await axios.get(url)
      return response.data
    }catch(error){
      throw(error)
    }
  }
}

export default ConnAPI