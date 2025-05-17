import { CarMin } from "./car-min";
import { UserMin } from "./user-min";

export interface TripList {
    id:number
    departDate:string;
    arrivalDate:string;
    creditPrice:number;
    driver:UserMin;
    car:CarMin;
    placeNumber:number;
    departLocation:string;
    arrivalLocation:string;
}
