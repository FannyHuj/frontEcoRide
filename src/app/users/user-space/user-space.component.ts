import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import {AddNewCarComponent} from '../../trip/add-new-car/add-new-car.component';
import { Car } from '../../models/car';
import { PreferencesComponent } from '../preferences/preferences.component';
import { Trip } from '../../models/trip';
import { CommonModule } from '@angular/common';
import { TripService } from '../../trip/services/trip.service';
import { RouterModule } from '@angular/router';
import { StatusTripPipe } from '../../pipe/status-trip.pipe';
import { ReportTrip } from '../../models/report-trip';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/review.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FilterTripHistoricPipe } from '../../pipe/filter-trip-historic.pipe';
import { ReportTripService } from '../../services/report-trip.service';


@Component({
  selector: 'app-user-space',
  imports: [AddNewCarComponent,PreferencesComponent,CommonModule,RouterModule,StatusTripPipe,FormsModule,FilterTripHistoricPipe],
  templateUrl: './user-space.component.html',
  styleUrl: './user-space.component.css'
})
export class UserSpaceComponent {

  userConnected = {} as User; // Déclaration de la variable userSpace qui va stocker l'utilisateur récupéré du token grâce à la fonction getUser()
  carCreated = input<Car>({} as Car);
  trips:Trip[]=[];
  date=new Date();
  selectedTrip:Trip={}as Trip;
  report:ReportTrip= {} as ReportTrip;
  review:Review= {} as Review;


  validateProfile(){
    this.userConnected.cars.push(this.carCreated());
  }

  constructor(private authService: AuthService, private tripService:TripService, private reviewService:ReviewService, private reportTripService: ReportTripService) { // Injection du service AuthService pour utiliser la fonction getUser()
    this.authService.getUser().subscribe({ // Souscription à l'observable getUser()
      next: (user) => {
        this.userConnected = user; // Stocke l'utilisateur récupéré
      },
      error: (err) => {
        console.error("Erreur", err);
      }
    });
  }

  loadTrips(){
   this.tripService.getAllTripByUserId(this.userConnected.id).subscribe({
    next: (data) => {
      this.trips = data; 
    },
    error: (err) => {
      console.error("Erreur", err);
    }
  });
  }

 // @Output() trip = new EventEmitter<Trip>();

  setSelectedTrip(trip : Trip) {
    this.selectedTrip=trip;
  }

  terminateTrip(){
    this.tripService.terminatedTrip(this.selectedTrip.id).subscribe();
  }

  cancelTrip(){
    this.tripService.cancelTrip(this.selectedTrip.id, this.userConnected.id).subscribe();
    
  }

  validateReview(){
    this.review.publish=false;
    this.review.tripId=this.selectedTrip.id;
    this.review.ownerId=this.userConnected.id;
    this.reviewService.addReview(this.review).subscribe({ // Souscription à l'observable getUser()
      next: (user) => {
      },
      error: (err) => {
        console.error("Erreur", err);
      }
    });
  }

  isDriver(trip : Trip){
    console.log(trip);  
    return this.userConnected.id== trip.driver.id;
  }

  reportTrip(){
    
    this.report.idTrip=this.selectedTrip.id;
    this.reportTripService.reportTrip(this.report).subscribe();
    
  }

  startTrip(){
    this.tripService.startTrip(this.selectedTrip.id).subscribe();
  }

  role:string = "";

  passager(): void {
    this.role = "passager";
  }

  chauffeur(): void {
    this.role = "chauffeur";
  }

  both(): void {
    this.role = "both";
  }






}  