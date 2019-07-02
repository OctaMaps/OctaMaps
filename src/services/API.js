import axios from "axios"
const credentials = require("../credentials/credentials.json")

function API() {
	getData = async url => {
		try {
			const response = await axios.get(url)
			if (response.data.result) {
				return response.data.result
			} else {
				return response.data
			}
		} catch (error) {
			throw error
		}
	}

	setData = async (downloadData = true, downloadVersionCode = true) => {
		try {
			data = []
			versionCode = ""
			if (downloadData) data = await getData(credentials.getDataURL)
			if (downloadVersionCode) {
				const { id_version } = await getData(credentials.getUpdateURL)
				return { data, versionCode: id_version }
			}
			return { data, versionCode }
		} catch (error) {
			throw error
		}
	}
	return { setData }
}

module.exports = API
