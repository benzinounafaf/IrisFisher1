import axios from "axios";
import ApiBaseUrl from "../config/config";

const getAllClassesApi = async () =>{

    const result = await axios({
      method: 'get',
      url: `${ApiBaseUrl}/iris/all_classe/`,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      }
    });
    return result;
    
}


export default getAllClassesApi