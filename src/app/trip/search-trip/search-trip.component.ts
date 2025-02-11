import { Component, Output } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../services/trip.service';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-search-trip',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './search-trip.component.html',
  styleUrl: './search-trip.component.css',
})
export class SearchTripComponent {
  trip: Trip = {} as Trip; // Objet Trip pour stocker la recherche
  trips: Trip[] = []; // Liste des trajets trouvés
  //selectedTrip: Trip | null = null; // Stocke le trajet sélectionné

  //@Output() tripSelected = new EventEmitter<Trip>(); // Émetteur d'événement pour transmettre le trajet sélectionné

  constructor(private service: TripService) {} // Injection du service TripService

  // Méthode pour rechercher les trajets
  onClick() {
    this.service.searchTrip(this.trip).subscribe((data: Trip[]) => {
      this.trips = data; // Stockage des trajets récupérés depuis l'API
    });
  }

}
