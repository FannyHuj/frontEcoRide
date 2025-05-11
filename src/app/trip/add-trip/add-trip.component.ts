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
  selectedCar:Car = {} as Car;

  constructor(
    private service: TripService,
    private authService: AuthService
  ) {
    this.authService.getUser().subscribe({
      next: (driver) => {
        this.cars = driver.cars;
      },
      error: (err) => {
        console.error("Erreur lors du chargement de l'utilisateur", err);
      }
    });
  }
  
  

  onSubmit(): void {
    this.authService.getUser().subscribe({
      next: (driver) => {
        this.trip.driver = driver;
        this.trip.car = this.selectedCar;
        //this.trip.arrivalDate= new Date(`${this.trip.arrivalDate} ${this.trip.arrivalHour}:00`);
        
        let arrivalDate=new Date(this.trip.arrivalDate);
        let [arrivalHour, arrivalMinute] = `${this.trip.arrivalHour}`.split(':').map(Number);
        console.log(arrivalHour)
        console.log(arrivalMinute)
        this.trip.arrivalDate=new Date(arrivalDate.setHours(arrivalHour, arrivalMinute, 0));
        console.log(this.trip.arrivalDate)
        
        
        let departDate=new Date(this.trip.departDate);
        let [hour, minute] = `${this.trip.departHour}`.split(':').map(Number);
        this.trip.departDate=new Date(departDate.setHours(hour, minute, 0));

       
        this.service.addTrip(this.trip).subscribe({

          next: () => {
            console.log("Trajet publié avec succès !");

          },
          error: (err) => {
            console.error("Erreur lors de la publication du trajet :", err);
          }
        });
      },
      error: (err) => {
        console.error("Erreur lors de la récupération de l'utilisateur :", err);
      }
    });
  }
  

}
