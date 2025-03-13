import { Car } from "./car";
import { User } from "./user";

export interface Trip {
    id:number;
    departDate:Date;
    departHour:Date;
    departLocation:string;
    arrivalDate:Date;
    arrivalHour:Date;
    arrivalLocation:string;
    status:string;
    placeNumber:number;
    price:number;
    passengers:User[];
    driver:User;
    car:Car;
}
