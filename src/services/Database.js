import PouchDB from "pouchdb-react-native"
const API = require("./API")
const arraySync = require("../utils/arraySync")

function Database() {
	const database = new PouchDB("octamaps")
	const api = API()

	destroy = async () => {
		database.destroy().then(() => console.log("sucess"))
	}

	insertVersionCode = async versionCode => {
		try {
			versionCodeDB = await database.get("versionCode")
			database
				.put({
					_id: "versionCode",
					_rev: versionCodeDB._rev,
					versionCode: versionCode
				})
				.then()
				.catch(error => console.log("Error when updating versionCode: ", error))
		} catch (error) {
			database
				.put({
					_id: "versionCode",
					versionCode: versionCode
				})
				.then()
				.catch(error => console.log("Error when creating versionCode: ", error))
		}
	}

	insertClassRoom = async classRoom => {
		// Erro no Insert
		const _id = classRoom.id.toString()
		delete classRoom.id
		classRoom._id = _id
		try {
			const classRoomRef = await database.get(classRoom._id)
			classRoom._rev = classRoomRef._rev
			await database.put(classRoom)
		} catch (error) {
			console.log(typeof error)
			await database.put(classRoom)
		}
	}

	getAllDocsID = async () => {
		try {
			const response = await database.allDocs({
				include_docs: false,
				attachments: false
			})
			const docs = response.rows.filter(item => item.id !== "updateVersionID")
			const docsID = docs.map(item => item.id)
			return docsID
		} catch (error) {
			console.log("getAllDocsID", error)
			throw ("getAllDocsID", error)
		}
	}

	getAllDocs = async () => {
		// getAllDocs não retornando para newHeader
		console.log("getAllDocs Called")
		try {
			const rawDocs = await database.allDocs({
				include_docs: true,
				attachments: false
			})
			const filteredDocs = rawDocs.rows.filter(
				item => item.doc._id !== "versionCode" || !item.doc.versionCode
			)
			const docs = filteredDocs.map(item => item.doc)
			console.log("Docs Length: ", docs.length)
			if (docs.length > 1) {
				console.log("getAllDocs will return something")
				return docs
			}
			return undefined
		} catch (error) {
			throw ("getAllDocs", error)
		}
	}

	saveData = async (docsAPI, versionCode) => {
		try {
			if (docsAPI) {
				let docsDB = await getAllDocs()
				if (docsDB) {
					const differences = await arraySync(docsDB, docsAPI, "_id")
					differences.removed.forEach(async item => {
						await database.remove(item._id, item._rev)
					})
					differences.created.forEach(async item => {
						await insertClassRoom(item)
					})
					differences.changed.forEach(async updateItem => {
						await insertClassRoom(updateItem)
					})
				}
				if (!docsDB) {
					docsAPI.forEach(async item => {
						insertClassRoom(item)
					})
				}
			} else {
				throw "No data"
			}
			if (versionCode) {
				insertVersionCode(versionCode)
			} else {
				throw "Sem 'versionCode' para inserir"
			}
		} catch (error) {
			throw "Error at saveData(): " + error
		}
	}
	// Migration, ajustar
	migration = async () => {
		try {
			const docs = await database.allDocs({
				include_docs: false,
				attachments: false
			})
			if (docs.total_rows <= 1) {
				console.log("Migration Started")
				const data = await api.getData()
				const versionCode = await api.getVersionCode()
				await saveData(data, versionCode)
				console.log("Migration End")
			}
		} catch (error) {
			console.log("Migration Error")
			console.log(error)
			throw error
		}
	}

	checkUpdate = async () => {
		const versionCode = await api.getVersionCode()
		versionCodeAPI = versionCode
		versionCodeDB = await database.get("versionCode")
		versionCodeDB = versionCodeDB.versionCode
		if (versionCodeAPI > versionCodeDB) {
			const data = await api.getData()
			await saveData(data, versionCode)
		}
	}
	return { migration, checkUpdate, getAllDocs, destroy }
}

module.exports = Database
