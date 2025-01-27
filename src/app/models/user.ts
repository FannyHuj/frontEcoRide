import { Car } from "./car";
import { Review } from "./review";
import { Role } from "./role";

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
    role:Role[];
    review:Review [];
}
