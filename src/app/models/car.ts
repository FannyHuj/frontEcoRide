import { Brand } from "./brand";

export interface Car {
    model:string;
    registration:string;
    energy:string;
    color:string;
    first_registration_date:Date;
    brand:Brand;

}
