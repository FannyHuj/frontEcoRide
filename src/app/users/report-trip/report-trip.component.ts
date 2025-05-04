import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportTrip } from '../../models/report-trip';
import { Trip } from '../../models/trip';

@Component({
  selector: 'app-report-trip',
  imports: [CommonModule,FormsModule],
  templateUrl: './report-trip.component.html',
  styleUrl: './report-trip.component.css'
})
export class ReportTripComponent {

  report:ReportTrip= {} as ReportTrip;

  validateReport(){

  }

  @Input()
  set trip(trip:Trip){
    
  }
}
