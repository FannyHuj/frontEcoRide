import { Trip } from "./trip";
import { User } from "./user";
import { UserMin } from "./user-min";

export interface ReportTrip {

    idTrip:Trip;
    date:Date;
    detail:string;
    reportOwner:UserMin
    id:number;
      
}
