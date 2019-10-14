contains = (item, query) => {
	// Função que faz a filtragem
	let { titulo_bloco, numero_piso, codigo_sala, titulo_sala } = item
	try {
		titulo_bloco = titulo_bloco.toLowerCase()
		titulo_sala = titulo_sala.toLowerCase()
		codigo_sala = codigo_sala.toLowerCase()
		// numero_piso = numero_piso.toLowerCase()
		if (titulo_sala.includes(query)) {
			return true
		} else {
			return false
		}
	} catch (error) {
		console.log(error)
		throw ("contains", error)
	}
}

module.exports = contains
