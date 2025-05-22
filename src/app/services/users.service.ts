import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}

  getAllUsers(): Observable<User[]> {
    console.log("userService called called")
      return this.http.get<User[]>(environment.apiURL+'/api/admin/getAllUsers');
    }

  findUserById(id:number): Observable<User> {
      return this.http.get<User>(environment.apiURL+`/api/user/${id}`);
  }

  suspendingMember(id:number): Observable<any> {
    return this.http.put(environment.apiURL+`/api/user/suspending/${id}`,{});
  }

  reactivateMember(id:number): Observable<any>{
    return this.http.put(environment.apiURL+`/api/user/reactivate/${id}`,{});
  }

  newUser(user:FormData):Observable<any>{
      return this.http.post(environment.apiURL+'/api/newUser',user);
    }

   getUserProfile(id:number):Observable<any>{
      return this.http.get(environment.apiURL+'/api/user/profile/${id');
    }

    getAllEmployee(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:8000/api/getAllEmployee');
    }

}
