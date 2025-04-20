import { Car } from "./car";
import { UserMin } from "./user-min";

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
    creditPrice:number;
    car:Car;
    driver:UserMin;
}
