import PouchDB from "pouchdb-react-native"
const api = require("./API")
const arraySync = require("../utils/arraySync")

function Database(name) {
	const database = new PouchDB(name)
	const apiConn = api()

	destroy = async () => {
		database.destroy()
	}

	insert = async ({
		_id,
		codigo_sala,
		numero_piso,
		titulo_bloco,
		titulo_campus,
		titulo_sala,
		_rev
	}) => {
		if (_rev) {
			response = await database.put({
				_id,
				_rev,
				codigo_sala,
				numero_piso,
				titulo_bloco,
				titulo_campus,
				titulo_sala
			})
		} else {
			await database.put({
				_id,
				codigo_sala,
				numero_piso,
				titulo_bloco,
				titulo_campus,
				titulo_sala
			})
		}
	}

	getAllDocsID = async () => {
		const response = await database.allDocs({
			include_docs: false,
			attachments: false
		})
		const docs = response.rows.filter(item => item.id !== "updateVersionID")
		const docsID = docs.map(item => item.id)
		return docsID
	}

	getAllDocs = async () => {
		const rawDocs = await database.allDocs({
			include_docs: true,
			attachments: false
		})
		let docs = rawDocs.rows.filter(item => item.doc._id !== "versionCode")
		docs = docs.map(item => item.doc)
		return docs
	}

	setData = async (docsApi, versionCode, func) => {
		try {
			if (docsApi) {
				switch (func) {
					case "update":
						try {
							const docsDB = await getAllDocs()
							const differences = await arraySync(docsDB, docsApi, "_id")

							differences.removed.forEach(async item => {
								await database.remove(item._id, item._rev)
							})
							differences.created.forEach(async item => {
								await insert(item)
							})
							differences.changed.forEach(async updateItem => {
								sourceItem = await database.get(updateItem._id)
								updateItem._rev = sourceItem._rev
								await insert(updateItem)
							})
						} catch (error) {
							throw error
						}
						break
					case "insert":
						docsApi.forEach(async item => {
							insert(item)
						})
						break
				}
			} else {
				throw "Sem dados para inserir"
			}
			if (versionCode) {
				switch (func) {
					case "update":
						versionCodeDB = await database.get("versionCode")
						database.put({
							_id: "versionCode",
							_rev: versionCodeDB._rev,
							versionCode: versionCode
						})
						break
					case "insert":
						database
							.put({
								_id: "versionCode",
								versionCode: versionCode
							})
							.then(message => console.log(message))
							.catch(error => console.log(error))
						break
				}
			} else {
				throw "Sem 'versionCode' para inserir"
			}
		} catch (error) {
			throw "Erro: " + error
		}
	}

	migration = async () => {
		docs = await database.allDocs({
			include_docs: false,
			attachments: false
		})
		if (docs.total_rows <= 0) {
			const { data, versionCode } = await apiConn.setData()
			docs = data
			await setData(docs, versionCode, "insert")
		}
	}

	update = async (docs, versionCode) => {
		await setData(docs, versionCode, "update")
	}

	checkUpdate = async () => {
		const { versionCode } = await apiConn.setData(false, true)
		versionCodeApi = versionCode
		versionCodeDB = await database.get("versionCode")
		versionCodeDB = versionCodeDB.versionCode
		console.log(versionCodeApi, versionCodeDB)
		if (versionCodeApi > versionCodeDB) {
			const { data } = await apiConn.setData(true, false)
			docs = data
			await update(docs, versionCodeApi)
		}
	}
	return { migration, checkUpdate, getAllDocs }
}

module.exports = Database
