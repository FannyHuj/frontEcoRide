import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getStatistic(): Observable<Statistics> {
    return this.http.get<Statistics>('http://localhost:8000/api/covoiturages/trip-per-day');
  }

  terminatedTrip(id:number): Observable<Trip> {
    return this.http.get<Trip>(`http://localhost:8000/api/terminate/${id}`);
  }

  cancelTrip(id:number, userId:number): Observable<Trip> {
    return this.http.put<Trip>(`http://localhost:8000/api/cancel/trip/${id}/user/${userId}`,{});
  }

  startTrip(id:number): Observable<Trip> {
    return this.http.put<Trip>(`http://localhost:8000/api/start/trip/${id}`,{});
  }
  

}
