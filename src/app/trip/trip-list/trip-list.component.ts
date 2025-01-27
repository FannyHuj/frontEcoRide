import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../services/trip.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.css'
})
export class TripListComponent {
  trips:Trip []=[] as Trip [];
  constructor(private service:TripService){

     this.service.getAllTrip().subscribe({
        next:(result)=>{this.trips=result;},
        error:(err)=>{console.log(err);}
         }
      );
  }
}
