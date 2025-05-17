import { Component, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../services/trip.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripSearch } from '../../models/trip-search';
import { TripList } from '../../models/trip-list';
import { TripsFilters } from '../../models/trips-filters';

@Component({
  selector: 'app-search-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Supprimer EventEmitter et Output d'ici
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css'],
})
export class SearchTripComponent {
  searchTrip: TripSearch  = {} as TripSearch ; // Objet Trip pour stocker la recherche initial sans filtre
  filters: TripsFilters = {} as TripsFilters;// Objet Filtres pour stocker la recherche avec filtres

  trips: TripList[] = []; // Liste des trajets trouvés sans filtres
  filteredTrips: TripList[] = []; // Liste des trajets trouvés avec filtres

  @Output() tripsFound = new EventEmitter<TripList[]>(); // Émetteur d'événement pour transmettre les trajets trouvés

  constructor(private service: TripService) {} // Injection du service TripService

  // Méthode pour rechercher les trajets
  onClick() {
    this.service.searchTrip(this.searchTrip).subscribe((data: TripList[]) => {
      this.trips = data; // Stockage des trajets récupérés depuis l'API
    });
  }

  // Méthode pour filtrer les trajets

   onFilter() {
    this.service.searchWithFilters(this.filters).subscribe((data: TripList[]) => {
      this.filteredTrips = data; // Stockage des trajets récupérés depuis l'API
    });
  }

}

