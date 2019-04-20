contains = ({ titulo_bloco, numero_piso, codigo_sala, titulo_sala }, query) =>{ // Função que faz a filtragem
    titulo_bloco = titulo_bloco.toLowerCase()
    titulo_sala = titulo_sala.toLowerCase()
    codigo_sala = codigo_sala.toLowerCase()
    numero_piso = numero_piso.toLowerCase()
    if (titulo_sala.includes(query)){
      return true
    }else{
      return false
    }
  }

module.exports = contains