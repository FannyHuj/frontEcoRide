import { Component, output } from '@angular/core';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';
import { TripService } from '../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { CarService } from '../../services/car.service';

@Component({
  standalone: true,
  selector: 'app-add-new-car',
  imports: [FormsModule],
  templateUrl: './add-new-car.component.html',
  styleUrl: './add-new-car.component.css'
})
export class AddNewCarComponent {


car:Car= {} as Car;

constructor (private authService: AuthService, private carService:CarService) {
  
  this.authService.getUser().subscribe({
      next: (driver) => {
        console.log(" driver "+ driver.lastName);
        this.car.driver = driver;
      },
      error: (err) => {
        console.error("Erreur lors du chargement de l'utilisateur", err);
      }
    });
}



addNewCar(){
console.log(" car "+ this.car.model);
this.carService.addNewCar(this.car).subscribe();

}
}
