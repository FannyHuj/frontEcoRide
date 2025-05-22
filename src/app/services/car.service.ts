import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  
  addNewCar(car:Car):Observable<Car>{
    return this.http.post<Car>(environment.apiURL+'/api/addNewCar',car);
  }

}
