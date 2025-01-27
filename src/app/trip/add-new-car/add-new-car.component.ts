import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-car',
  imports: [FormsModule],
  templateUrl: './add-new-car.component.html',
  styleUrl: './add-new-car.component.css'
})
export class AddNewCarComponent {
car:Car= {} as Car;

addNewCar(){
 console.log(this.car.model);
 console.log(this.car.registration);
 console.log(this.car.energy);
 console.log(this.car.color);
 console.log(this.car.first_registration_date);
 console.log(this.car.brand);
}

}
