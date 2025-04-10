import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth';
import { RoleType } from '../models/roleType';
import { User } from '../models/user';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string |null = null;
  private currentUser: User | null = null;

  constructor(private cookieService: CookieService, private http:HttpClient) { }

  setToken(token: string) {
    this.cookieService.set('jwtToken', token);
  }

  getToken(): string {
    return this.cookieService.get('jwtToken');
  }

  deleteToken() {
    this.cookieService.delete('jwtToken'); // Supprime le token JWT stocké dans les cookies. Permet à un utilisateur de se déconnecter en supprimant son token d'authentification.
  }
  login(login:Login):Observable<Auth>{
      return this.http.post<Auth>('http://localhost:8000/api/login_check',login)
    }

    hasRole(requiredRoles: RoleType[]): boolean {
      
        let tokenInfo = this.getDecodedAccessToken(this.getToken());// Décodage du token JWT

     console.log(tokenInfo.roles);
      return tokenInfo.roles.some((role: any) => // vérifie si l'utilisateur possède l'un des rôles requis.
        requiredRoles.includes(role)
      );
    }

    getDecodedAccessToken(token: string): any {
      try {
        return jwtDecode(token); // Décodage du token JWT
      } catch(Error) {
        return null;
      }
    }

    getUser():Observable<any>{
    let user: User = {} as User; // Création d'un objet user
    let tokenInfo = this.getDecodedAccessToken(this.getToken()); // Récupération du Token 
    user.email=tokenInfo.username; // L'attribut mail de l'objet user est égal à l'attribut mail (username) contenu dans le token 
    return this.http.post<any>('http://localhost:8000/api/userMail',user) // envoie le user à PHP
    
} 

  };
  
 