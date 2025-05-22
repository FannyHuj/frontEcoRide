import { Car } from "./car";
import { Preferences } from "./preferences";
import { Review } from "./review";

export interface UserProfile {

    totalTrip: number;
    totalReview: number;
    notation: number;
    review:Review[];
    picture: string;   
    firstname: string;
    lastname: string;
    preference: Preferences;
    car:Car;
}
