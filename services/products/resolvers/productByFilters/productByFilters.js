import {findData} from '../../databaseUtils/dbOperations'
export async function productByFilters(filters){
    const data = await findData({...filters});
    console.log(data);
    return data
}