import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../models/trip';

@Pipe({
  name: 'filterTripHistoric'
})
export class FilterTripHistoricPipe implements PipeTransform {

  transform(trips: Trip[],type:string): Trip[] {

    if(type==="myTrips"){
      return trips.filter(trip => trip.status!='done');
    }else if(type=='historic'){
      return trips.filter(trip => trip.status=='done');
    }
    else{
      return trips;
    }

    

  }

}
