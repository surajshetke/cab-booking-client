import {API,endpoints} from '../api';

import CabModel from '../shared/models/CabModel';

class CabService{

    static getAllCab(){
        return API.get(endpoints.api.cabs.getAllCab);
    }

    static createCab(cab:FormData){
        return API.post(endpoints.api.cabs.createCab,cab);
    }

    static updateCab(id:any,cab:FormData){
        return API.put(endpoints.api.cabs.updateCab+id,cab);
    }

    static deleteCab(id:string){
        return API.delete(endpoints.api.cabs.deleteCab+id);
    }

    // static getSingleUser(id:string){
    //     return API.get(endpoints.api.users.getOne+id);
    // }


}
export default CabService;

