import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSearch } from '../../models/trip-search';
import { TripList } from '../../models/trip-list';
import { Statistics } from '../../models/statistics';
import { TripsFilters } from '../../models/trips-filters';
import { Car } from '../../models/car';

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
  
  // searchWithFilters(filterSearch: TripsFilters): Observable<TripList[]> {
  //   return this.http.post<TripList[]>('http://localhost:8000/api/searchTripFilter', filterSearch);
  // }

  searchWithFilters(tripSearch: TripSearch): Observable<TripList[]> {
    return this.http.get<TripList[]>('http://localhost:8000/api/search', 
                                                                                   { params: 
                                                                                      { 'departLocation': tripSearch.departLocation, 
                                                                                        'departDate': tripSearch.departDate,
                                                                                        'arrivalLocation': tripSearch.arrivalLocation,
                                                                                        'placeNumber': tripSearch.placeNumber, 
                                                                                        'maxPrice': tripSearch.maxPrice, 
                                                                                        'notation': tripSearch.notation, 
                                                                                        'isEcologic': tripSearch.isEcologic 
                                                                                      }
                                                                                   }
                                                                                    );
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
