import axios from 'axios'

class ConnAPI{

  getData = (url) => {
      return axios.get(url)
      .then(response => response.data.result ) // No caso de uma linha, o return está implícito
      .then(e => e)
  }

  getUpdate = async (url) => {
    try{
      const response = await axios.get(url)
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }
}

export default ConnAPI