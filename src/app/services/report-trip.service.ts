import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportTrip } from '../models/report-trip';

@Injectable({
  providedIn: 'root'
})
export class ReportTripService {

   constructor(private http:HttpClient) {}

    reportTrip(report: ReportTrip):Observable<ReportTrip>{
      return this.http.post<ReportTrip>('http://localhost:8000/api/report',report);
    }
}
