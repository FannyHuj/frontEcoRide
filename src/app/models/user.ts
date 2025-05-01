import { Car } from "./car";
import { Review } from "./review";
import { RoleType } from "./roleType";
import { Trip } from "./trip";

export interface User {
    id:number;
    trip: any;
    lastName:string;
    firstName:string;
    email:string;
    password:string;
    phoneNumber:string;
    address:string;
    birthDate:string;
    picture:string;
    pseudo:string;
    cars:Car[];
    roles:RoleType[];
    review:Review [];
    credit:number;
    active:boolean;
}