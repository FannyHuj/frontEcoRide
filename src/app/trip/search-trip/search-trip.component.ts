import { Component, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../services/trip.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripSearch } from '../../models/trip-search';
import { TripList } from '../../models/trip-list';

@Component({
  selector: 'app-search-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Supprimer EventEmitter et Output d'ici
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css'],
})
export class SearchTripComponent {
  searchTrip: TripSearch  = {} as TripSearch ; // Objet Trip pour stocker la recherche
  trips: TripList[] = []; // Liste des trajets trouvés

  @Output() tripsFound = new EventEmitter<TripList[]>(); // Émetteur d'événement pour transmettre les trajets trouvés

  constructor(private service: TripService) {} // Injection du service TripService

  // Méthode pour rechercher les trajets
  onClick() {
    this.service.searchTrip(this.searchTrip).subscribe((data: TripList[]) => {
      this.trips = data; // Stockage des trajets récupérés depuis l'API
    });
  }
}

