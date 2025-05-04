import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { TripSearch } from '../../models/trip-search';
import { TripList } from '../../models/trip-list';
import { Statistics } from '../../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) {}
  addTrip(trip:Trip):Observable<Trip>{
    return this.http.post<Trip>('http://localhost:8000/api/trip',trip);
  }

  getAllTrip(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8000/api/tripList');
  }

  getAllTripByUserId(userId:number): Observable<Trip[]> {
    return this.http.get<Trip[]>(`http://localhost:8000/api/findByUser/${userId}`);
  }

  searchTrip(tripSearch: TripSearch): Observable<TripList[]> {
    return this.http.post<TripList[]>('http://localhost:8000/api/searchTrip', tripSearch);
  }
  

  findOne(id:number): Observable<Trip> {
    return this.http.get<Trip>(`http://localhost:8000/api/trip/${id}`);
  }

  booking(id:number, userId:number):Observable<any>{
    return this.http.post<any>(`http://localhost:8000/api/booking/trip/${id}/user/${userId}`,{});
  }

  signIn(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:8000/api/signIn',user);
  }

  getStatistic(): Observable<Statistics> {
    return this.http.get<Statistics>('http://localhost:8000/api/covoiturages/trip-per-day');
  }
}
