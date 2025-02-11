import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AddNewCarComponent } from './trip/add-new-car/add-new-car.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchTripComponent } from './trip/search-trip/search-trip.component';
import {LoginComponent} from '../app/users/login/login.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent

    },
    {
        path:"TripList",
        component:TripListComponent
    },
    {
        path:'AddTrip',
        component:AddTripComponent
    },
    {
        path:'AddNewCar',
        component:AddNewCarComponent
    },
    {
        path:'UserProfile',
        component:UserProfileComponent
    },
    { 
        path: 'tripDetails/:id', 
        component: TripDetailsComponent 
      },
    {
        path:'SearchTrip',
        component:SearchTripComponent
    },
    {
        path:'Login',
        component:LoginComponent
    }
];
