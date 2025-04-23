import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { AddNewCarComponent } from './trip/add-new-car/add-new-car.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchTripComponent } from './trip/search-trip/search-trip.component';
import {LoginComponent} from '../app/users/login/login.component';
import { authGuard } from './guard/auth.guard';
import { RoleType } from './models/roleType';
import { EmployeeSpaceComponent } from './users/employee-space/employee-space.component';
import { AdminSpaceComponent } from './users/admin-space/admin-space.component';
import { UserSpaceComponent } from './users/user-space/user-space.component';
import { MentionsLegalesComponent } from './shared/mentions-legales/mentions-legales.component';
import { SignInComponent } from './users/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent

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
        component:SearchTripComponent, 
    },
    {
        path:'Login',
        component:LoginComponent
    },
    {
        path:'SignIn',
        component:SignInComponent
    },
    {
        path:'EmployeeSpace', // Chemin de la route (URL: /SearchTrip)
        component:EmployeeSpaceComponent, // Composant à afficher lorsque cette route est atteinte
        canActivate: [authGuard],// Utilisation d'un guard pour sécuriser l'accès
        data: { roles: [RoleType.EMPLOYE] }// Restriction d'accès aux utilisateurs ayant le rôle EMPLOYE
    },
    {
        path:'AdminSpace',
        component:AdminSpaceComponent, 
        canActivate: [authGuard],
        data: { roles: [RoleType.ADMIN] }  
    },
    {
        path:'UserSpace',
        component:UserSpaceComponent, 
        canActivate: [authGuard],
        data: { roles: [RoleType.USER] }
    },
    { 
        path: 'MentionsLegales', 
        component: MentionsLegalesComponent
    },
];
