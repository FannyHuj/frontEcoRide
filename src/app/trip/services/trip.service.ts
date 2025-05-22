import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripSearch } from '../../models/trip-search';
import { TripList } from '../../models/trip-list';
import { Statistics } from '../../models/statistics';
import { Dashboard } from '../../models/Dashboard';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {


  constructor(private http:HttpClient) {}
  addTrip(trip:Trip):Observable<Trip>{
    return this.http.post<Trip>(environment.apiURL+'/api/trip',trip);
  }

  getAllTrip(): Observable<Trip[]> {
    return this.http.get<Trip[]>(environment.apiURL+'/api/tripList');
  }

  getAllTripByUserId(userId:number): Observable<Trip[]> {
    return this.http.get<Trip[]>(environment.apiURL+`/api/findByUser/${userId}`);
  }

  searchTrip(tripSearch: TripSearch): Observable<TripList[]> {
    return this.http.post<TripList[]>(environment.apiURL+'api/searchTrip', tripSearch);
  }

  searchWithFilters(tripSearch: TripSearch): Observable<TripList[]> {
    return this.http.get<TripList[]>(environment.apiURL+'/api/search', 
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
    return this.http.get<Trip>(environment.apiURL+`/api/trip/${id}`);
  }

  booking(id:number, userId:number):Observable<any>{
    return this.http.post<any>(environment.apiURL+`/${id}/user/${userId}`,{});
  }

  getChartInfo(): Observable<Statistics> {
    return this.http.get<Statistics>(environment.apiURL+'/api/trip/statistic');
  }

  getTotalInfo(): Observable<Dashboard> {
    return this.http.get<Dashboard>(environment.apiURL+'/api/trip/totalInfo');
  }

  terminatedTrip(id:number): Observable<Trip> {
    return this.http.get<Trip>(environment.apiURL+`/api/terminate/${id}`);
  }

  cancelTrip(id:number, userId:number): Observable<Trip> {
    return this.http.put<Trip>(environment.apiURL+`/${id}/user/${userId}`,{});
  }

  startTrip(id:number): Observable<Trip> {
    return this.http.put<Trip>(environment.apiURL+`/api/start/trip/${id}`,{});
  }
}
