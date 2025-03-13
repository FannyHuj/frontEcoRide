import { Component, output } from '@angular/core';
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
onCarUpdate = output<Car>();

addNewCar(){
  this.onCarUpdate.emit(this.car);
}

}
