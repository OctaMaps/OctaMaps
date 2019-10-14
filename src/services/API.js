import axios from "axios"
const credentials = require("../credentials.json")

function API() {
	const { baseURL, classRoomURL, versionCodeURL } = credentials
	axios.defaults.baseURL = baseURL
	getData = async () => {
		try {
			const response = await axios.get(classRoomURL)
			if (response.data.result) {
				return response.data.result
			}
		} catch (error) {
			console.log("getVersionCode", error)
			throw ("getVersionCode", error)
		}
	}

	getVersionCode = async () => {
		try {
			const response = await axios.get(versionCodeURL)
			if (response.data.id_version) {
				return response.data.id_version
			}
		} catch (error) {
			throw ("getVersionCode", error)
		}
	}

	return { getData, getVersionCode }
}

module.exports = API
