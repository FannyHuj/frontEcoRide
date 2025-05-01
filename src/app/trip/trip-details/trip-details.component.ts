import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../../models/trip';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
})
export class TripDetailsComponent {
  passengers: User[] = [] as User[];
  trip: Trip = {} as Trip;
  user: User= {} as User;
  

  @Input()
  set id(id: number) {
    this.tripService.findOne(id).subscribe((data) => { // Conversion en number et appel API
      this.trip = data; // Stockage des données reçues
  })}
  constructor(
    private route: ActivatedRoute, // Service pour accéder aux paramètres de route
    private tripService: TripService, // Service pour récupérer les données
    private authService: AuthService,
    
  ) 
  {}
  onSubmit() {
    this.authService.getUser().subscribe({
      next: (user) => {
        this.user=user;
        this.tripService.booking(this.trip.id, this.user.id).subscribe();
      
      },
      error: (err) => {
        console.error('Erreur', err);
      },
    });

    if (this.user.credit > this.trip.creditPrice){

      this.user.credit=this.user.credit-this.trip.creditPrice;

    }

  }

  }

 



