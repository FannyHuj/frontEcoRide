import { Car } from "./car";

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
    car:Car;
}
