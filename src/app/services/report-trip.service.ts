import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportTrip } from '../models/report-trip';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportTripService {

   constructor(private http:HttpClient) {}

    reportTrip(report: ReportTrip):Observable<ReportTrip>{
      return this.http.post<ReportTrip>(environment.apiURL+'/api/report',report);
    }

    findAllReports():Observable<ReportTrip[]>{
      return this.http.get<ReportTrip[]>(environment.apiURL+'/api/employee/all/reports');
    }

    changeReportStatus(id:number, status:boolean):Observable<ReportTrip>{
      return this.http.put<ReportTrip>(environment.apiURL+`/api/changeReportStatus/${id}/${status}`,{});
    }
}
