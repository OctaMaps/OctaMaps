import contains from "./contains"

filter = (query, fullData) => {
  let filteredData = []
  query = query.toLowerCase() 
  if (query){
      fullData.forEach( (item) => {
        if (contains(item, query)){
          filteredData.push(item)
        }
        }) 
        return filteredData
  }else{
      return filteredData
  }
}

export default filter