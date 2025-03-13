import { Car } from "./car";
import { Review } from "./review";
import { RoleType } from "./roleType";
import { Trip } from "./trip";

export interface User {
    lastName:string;
    firstName:string;
    mail:string;
    password:string;
    phoneNumber:string;
    address:string;
    birthDate:string;
    picture:string;
    pseudo:string;
    car:Car[];
    tripsOwner:Trip[];
    role:RoleType[];
    review:Review [];
    credit:number;
}