import contains from "./contains"

filter = (query, fullData) => {
	try {
		let filteredData = []
		query = query.toLowerCase()
		if (query) {
			fullData.forEach(item => {
				//Trocar por filter
				if (contains(item, query)) {
					filteredData.push(item)
				}
			})
			return filteredData
		} else {
			return filteredData
		}
	} catch (error) {
		throw ("filter", error)
	}
}

export default filter
