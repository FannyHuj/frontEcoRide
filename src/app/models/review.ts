import { User } from "./user";

export interface Review {
    id:number;
    comment:string;
    notation:string;
    publish:boolean;
    ownerId:number;
    tripId:number
}
