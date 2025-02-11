import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripService } from '../trip/services/trip.service';
import { Trip } from '../models/trip';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 trip: Trip = {} as Trip; // Objet Trip pour stocker la recherche
  trips: Trip[] = []; // Liste des trajets trouvés

  @Output() tripsFound = new EventEmitter<Trip[]>(); // Émetteur d'événement pour transmettre les trajets trouvés

  constructor(private service: TripService) {} // Injection du service TripService

  // Méthode pour rechercher les trajets
  onClick() {
    this.service.searchTrip(this.trip).subscribe((data: Trip[]) => {
      this.trips = data; // Stockage des trajets récupérés depuis l'API
    });
  }
}
