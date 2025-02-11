import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../../models/trip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
})
export class TripDetailsComponent {
  trip?: Trip; // Déclaration de la propriété qui contiendra les détails du trajet
  

  @Input()
  set id(id: number) {
    this.service.findOne(id).subscribe((data) => { // Conversion en number et appel API
      this.trip = data; // Stockage des données reçues
  })}
  constructor(
    private route: ActivatedRoute, // Service pour accéder aux paramètres de route
    private service: TripService // Service pour récupérer les données
  ) 
  {}
  }



