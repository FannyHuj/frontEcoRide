import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) {}

  addReview(review:Review):Observable<Review>{
      return this.http.post<Review>(environment.apiURL+'/api/addReview',review);
    }

    findAllReview():Observable<Review[]>{
          return this.http.get<Review[]>(environment.apiURL+'/api/employee/all/reviews');
        }
    changeReviewStatus(id:number, status:boolean):Observable<Review>{
      return this.http.put<Review>(environment.apiURL+`/api/changeReviewStatus/${id}/${status}`,{});
    }

}
