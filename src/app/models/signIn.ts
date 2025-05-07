import { RoleType } from "./roleType";

export interface SignIn {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    address:string;
    credit:number;
    birthDate:string;
    phoneNumber:string;
    role:RoleType;
}