import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTrip'
})
export class StatusTripPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value === 'coming'){
      return "à venir"; 
    }
    else if(value === 'inProgress'){
      return "en cours"
    }
    else if (value === 'done'){
      return "terminé"
    }

    else {
      return value
    }
  }

}
