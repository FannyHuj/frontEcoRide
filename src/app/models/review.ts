import { User } from "./user";
import { UserMin } from "./user-min";

export interface Review {
    id:number;
    comment:string;
    notation:string;
    publish:boolean;
    ownerId:UserMin;
    tripId:number
}
