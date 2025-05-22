import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '../models/preferences';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private http:HttpClient) { }

   addPreferences(id:number): Observable<Preferences> {
      return this.http.post<Preferences>(`http://localhost:8000/api/preferences/driver/${id}`,{});
    }
}
