import { Car } from "./car";
import { Review } from "./review";
import { RoleType } from "./roleType";

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
    role:RoleType[];
    review:Review [];
}
