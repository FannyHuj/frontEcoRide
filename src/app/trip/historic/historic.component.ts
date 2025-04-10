import { Component } from '@angular/core';
import { TripService } from '../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { Trip } from '../../models/trip';
import { User } from '../../models/user';

@Component({
  selector: 'app-historic',
  imports: [],
  templateUrl: './historic.component.html',
  styleUrl: './historic.component.css'
})
export class HistoricComponent {

 trips:Trip[] = [] as Trip[];
 user:User={} as User;

constructor(private service: TripService, private authService: AuthService){}

getHistoric(){
  this.authService.getUser().subscribe({ 
    next: (user) => { 
      this.user.trip = user; 
    },
    error: (err) => {
      console.error("Erreur", err);
    }
  });
}
}