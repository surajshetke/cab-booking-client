import {API,endpoints} from '../api';

import UserModel from '../shared/models/UserModel';

class UserService{
    static createUser(user:UserModel){
        return API.post(endpoints.api.users.create,user);
    }

    static updateUser(id:string,user:UserModel){
        return API.put(endpoints.api.users.update+id);
    }

    static deleteUser(id:string){
        return API.delete(endpoints.api.users.delete+id);
    }

    static getSingleUser(id:string){
        return API.get(endpoints.api.users.getOne+id);
    }
    static getAllUsers(){
        return API.get(endpoints.api.users.getAll);
    }

}
export default UserService;