import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReportTrip } from '../../models/report-trip';
import { ReportTripService } from '../../services/report-trip.service';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-employee-space',
  imports: [CommonModule],
  templateUrl: './employee-space.component.html',
  styleUrl: './employee-space.component.css'
})
export class EmployeeSpaceComponent {

  reports:ReportTrip[]=[] as ReportTrip[]; 
  report: ReportTrip= {} as ReportTrip;

  
  reviews:Review[]=[] as Review[]; 
  review:Review= {} as Review;

  selectedReview:Review= {} as Review;
  successMessage: string | null = null; 
  errorMessage: string | null = null;


  constructor(private reportService:ReportTripService, private reviewService:ReviewService) { // Injection du service AuthService pour utiliser la fonction getUser()
  
    this.loadReviews()
  }

    loadReports(){
      this.reportService.findAllReports().subscribe({
        next: (data) => {
          this.reports = data; 
        },
        error: (err) => {
          console.error("Erreur", err);
        }
   });
  }

     loadReviews(){
      this.reviewService.findAllReview().subscribe({
        next: (data) => {
          this.reviews = data; 
          console.log(this.reviews);
        },
        error: (err) => {
          console.error("Erreur", err);
        }
   });
  }
  changeReviewStatus(id:number, status:boolean){
    this.reviewService.changeReviewStatus(id, status).subscribe({
      next: () => {
        this.successMessage = 'Vous avez bien mis à jour le statut de le statut de cet avis!'; 
        this.loadReviews(); 
      },
      error: (err) => {
        this.errorMessage= "Il y a eu une erreur dans le traitement de votre demande, veuillez réessayer plus tard";
      }
    });
  }

   setSelectedReview(review : Review) {
      this.selectedReview=review;
    }

     closeAlert() {
    this.successMessage = null;
  }
  closeErrorAlert() {
    this.errorMessage = null;
  }





}
