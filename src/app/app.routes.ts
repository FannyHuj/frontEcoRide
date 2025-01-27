import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { Router } from '@angular/router';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AddNewCarComponent } from './trip/add-new-car/add-new-car.component';

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
];
