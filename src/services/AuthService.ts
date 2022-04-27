import {API,endpoints} from '../api';
import UserModel from '../shared/models/UserModel';

class AuthService
{
    static userLogin(user:UserModel){

        return API.post(endpoints.api.auth.userLogin,user).then((response)=>{
        console.log(response,'response');
        const token = response.headers['x-token'];
        if(token)sessionStorage.setItem("token",token);
        return response});
    }

    static validateToken(){
        const token = sessionStorage.getItem("token");
        if(token){
            return API.post(endpoints.api.auth.validate,{token})
        }else{
            return Promise.reject({message:"Invalid token"})
        }
    }
}

export default AuthService