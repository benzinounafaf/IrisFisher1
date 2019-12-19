import axios from "axios";
import ApiBaseUrl from "../config/config";



const getAllApi = async () =>{
    
    const result = await axios({
      method: 'get',
      url: `${ApiBaseUrl}iris/all/`
    });
  
    return result;
}


export default getAllApi
