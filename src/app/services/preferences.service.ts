import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '../models/preferences';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private http:HttpClient) { }

   addPreferences(id:number, preference: Preferences): Observable<Preferences> {
      return this.http.post<Preferences>(environment.apiURL+`/api/preferences/driver/${id}`,preference);
    }
}
