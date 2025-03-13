import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

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

  searchTrip(trip: Trip): Observable<Trip[]> {
    return this.http.post<Trip[]>('http://localhost:8000/api/searchTrip', trip);
  }
  

  findOne(id:number): Observable<Trip> {
    return this.http.get<Trip>(`http://localhost:8000/api/trip/${id}`);
  }

  addPassengers(passengers:User[]):Observable<User[]>{
    return this.http.post<User[]>('http://localhost:8000/api/passengers',passengers);
  }

  signIn(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:8000/api/signIn',user);
  }

}

