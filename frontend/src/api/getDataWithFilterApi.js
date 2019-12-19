
import axios from "axios";
import ApiBaseUrl from "../config/config";


const getDataWithFilterApi = async (classe) =>{

    const result = await axios({
      method: 'get',
      url: `${ApiBaseUrl}/iris/classe/${classe}/`,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      }
    });
  
    return result;
}


export default getDataWithFilterApi