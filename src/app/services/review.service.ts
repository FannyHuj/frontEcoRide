import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) {}

  addReview(review:Review):Observable<Review>{
      return this.http.post<Review>('http://localhost:8000/api/addReview',review);
    }

    findAllReview():Observable<Review[]>{
          return this.http.get<Review[]>('http://localhost:8000/api/employee/all/reviews');
        }
    changeReviewStatus(id:number, status:boolean):Observable<Review>{
      return this.http.put<Review>(`http://localhost:8000/api/changeReviewStatus/${id}/${status}`,{});
    }

}
