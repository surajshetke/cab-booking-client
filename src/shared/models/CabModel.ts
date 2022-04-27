interface IObjectKeys{
  [key:string]:string|any
}

interface CabModel extends IObjectKeys{
    _id?:string;
    cabId?: number;
    type?: string;
    seats?: number;
    rate?: number;
    ac?: number;
    avatar?: string;
    status?: number;
    rtoNumber?: string;
    createdAt?: string;
  }
  
  export default CabModel;