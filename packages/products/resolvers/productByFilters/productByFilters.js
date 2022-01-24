import {findData} from '../../databaseUtils/dbOperations'

const injectInOperator = (filters)=>{
    for (const [key, value] of Object.entries(filters)) {
        console.log(`${key}: ${value}`);
        console.log(Array.isArray(value))
        if(Array.isArray(value)){
            filters[key] = {$in:value}
        }
      }
      console.log(filters)
}

export async function productByFilters(filters){
    console.log(typeof(filters))
    injectInOperator(filters)
    try {
        const data = await findData({...filters});
        return data
    } catch (error) {
        console.log(error)
    }
   
}