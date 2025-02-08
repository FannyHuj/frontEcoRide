import { Car } from "./car";
import { User } from "./user";

export interface Trip {
    id:number;
    departDate:Date;
    departHour:Date;
    departLocation:string;
    arrivalDate:Date;
    arrivalHour:string;
    arrivalLocation:string;
    status:string;
    placeNumber:number;
    price:number;
    user:User[];
    car:Car;
}
