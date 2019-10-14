objectNotEquals = (sourceObject, updateObject, identifier) => {
  if(sourceObject[identifier] == updateObject[identifier]){
    const updateObjectKeys = Object.keys(updateObject)
    for (let i = 0; i < updateObjectKeys.length; i++) {
      let index = updateObjectKeys[i]
      if(sourceObject[index] != updateObject[index]) return true
    }
  }
  
}

module.exports = objectNotEquals