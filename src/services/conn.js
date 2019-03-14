import axios from 'axios'

class Conn{

  api = (url) => {
      return axios.get(url)
      .then(response => { return response.data.result })
      .then(e => { return e })
  }
}

export default Conn
