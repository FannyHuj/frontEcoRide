import { Review } from "./review";

export interface UserMin {
    id:number;
    lastName:string;
    firstName:string;
    picture:string;
    notation:string;
    reviews:Review[]
    email:string;
}
