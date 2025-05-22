import { UserMin } from "./user-min";

export interface Car {
    id:number;
    model:string;
    registration:string;
    energy:string;
    color:string;
    first_registration_date:Date;
    brand:string;
    driver:UserMin;

}
