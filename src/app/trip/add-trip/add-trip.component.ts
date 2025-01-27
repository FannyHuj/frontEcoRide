import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../../models/trip';
import { RouterLink } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-add-trip',
  imports: [FormsModule,RouterLink],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {

  trip:Trip= {} as Trip;
  constructor(private service: TripService){
  }
  

onClick(){
  console.log(this.trip.departLocation);
  console.log(this.trip.arrivalLocation);
  console.log(this.trip.departDate);
  console.log(this.trip.departHour);
  console.log(this.trip.price);

  this.service.addTrip(this.trip).subscribe();
}


}
