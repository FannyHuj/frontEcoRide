import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string |null = null;

  constructor(private cookieService: CookieService, private http:HttpClient) { }
  setToken(token: string) {
    this.cookieService.set('jwtToken', token);
  }

  getToken(): string {
    return this.cookieService.get('jwtToken');
  }

  deleteToken() {
    this.cookieService.delete('jwtToken');
  }
  login(login:Login):Observable<Auth>{
      return this.http.post<Auth>('http://localhost:8000/api/login_check',login)
    }
  };
