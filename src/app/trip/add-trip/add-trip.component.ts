import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../../models/trip';
import { RouterLink } from '@angular/router';
import { TripService } from '../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { Car } from '../../models/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-trip',
  imports: [FormsModule,RouterLink, CommonModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {

  trip:Trip= {} as Trip;
  cars: Car[] = [];

  constructor(private service: TripService, private authService: AuthService){
  }
  

  onSubmit(){
  console.log(this.trip.departLocation);
  console.log(this.trip.arrivalLocation);
  console.log(this.trip.departDate);
  console.log(this.trip.departHour);
  console.log(this.trip.creditPrice);

this.authService.getUser().subscribe({ // Souscription à l'observable getUser() pour récupérer l'utilisateur connecté
    next: (driver) => { 
      this.trip.driver = driver; // Stocke l'utilisateur récupéré
      this.cars = driver.cars.model;
      
    },
    error: (err) => {
      console.error("Erreur", err);
    }
  });
  
  this.service.addTrip(this.trip).subscribe();
}

}
