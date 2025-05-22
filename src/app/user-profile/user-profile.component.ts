import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { Car } from '../models/car';
import { UserProfile } from '../models/user-profile';
import { TripService } from '../trip/services/trip.service';
import { UsersService } from '../services/users.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  car:Car={} as Car;
  trip:Trip = {} as Trip;

  userProfile: UserProfile= {} as UserProfile;
  

  
  @Input()
    set id(id: number) {
      this.tripService.findOne(id).subscribe((data) => { // Conversion en number et appel API
        this.trip = data; // Stockage des données reçues
    })}
  constructor(private tripService: TripService, private userService:UsersService) { // Injection du service
    this.userService.getUserProfile(this.trip.driver.id).subscribe((data) => { // Appel de l'API pour récupérer les données utilisateur
      this.userProfile = data; // Stockage des données reçues
    });

  }
}
