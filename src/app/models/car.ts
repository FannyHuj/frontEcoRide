import { Brand } from "./brand";
import { User } from "./user";

export interface Car {
    id:number;
    model:string;
    registration:string;
    energy:string;
    color:string;
    first_registration_date:Date;
    brand:Brand;
    driver:User;

}
