import axios from 'axios'

class ConnAPI{

  getData = (url) => {
      return axios.get(url)
      .then(response => response.data.result ) // No caso de uma linha, o return está implícito
      .then(error => error)
  }
}

export default ConnAPI