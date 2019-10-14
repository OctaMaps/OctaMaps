const exists = require('./exists')
const objectNotEquals = require('./objectNotEquals')

arraySync = (sourceArray, updateArray, identifier = '') => {
  const result = {}
  result.removed = sourceArray.filter(element => !exists(element, updateArray, identifier))
  result.created = updateArray.filter(element => !exists(element, sourceArray, identifier))
 
  result.changed = sourceArray.reduce((accumulator, sourceElement) => {
    switch(typeof(sourceElement)){
      case 'object':
        for (let index = 0; index <  updateArray.length; index++) {
          let updateElement = updateArray[index]
          if (objectNotEquals(sourceElement,updateElement, identifier)){
            accumulator.push(updateElement)
          }
        }
        return accumulator 
      default:
        console.log('O elemento não é um objeto')
      break
    }
  }, []) 

  result.unchanged = sourceArray.filter(sourceElement => {
    switch(typeof(sourceElement)){
      case 'object':
        for (let index = 0; index <  updateArray.length; index++) { 
          let updateElement = updateArray[index]
          if (!objectNotEquals(sourceElement,updateElement, identifier) && exists(sourceElement, updateArray, identifier) && sourceElement[identifier] == updateElement[identifier]) return true
        } 
      break
      default:
        console.log('O elemento não é um objeto')
      break
    }
  })
  return result
  
}


// export default arraySync
module.exports = arraySync