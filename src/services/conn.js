import axios from 'axios'

class Conn{
  constructor(){
  }
  api = (url) => {
      return axios.get(url).then(response => {
        return response.data.result
      }).catch(error => {
        console.log(error) // Caso dê erro, exibir erro
        return error
      })
  }
}

export default Conn