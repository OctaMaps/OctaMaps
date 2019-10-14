exists = (item, array, identifier) => {

  if (identifier){
    switch(typeof(item)){
      case 'object':
        for (let index = 0; index < array.length; index++) {
          let element = array[index]
          if(element[identifier] == item[identifier])
            return true
        }
        return false
    }
  }else{
    return array.includes(item)
  }

}

module.exports = exists