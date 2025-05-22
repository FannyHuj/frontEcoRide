import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}

  getAllUsers(): Observable<User[]> {
    console.log("userService called called")
      return this.http.get<User[]>('http://localhost:8000/api/admin/getAllUsers');
    }

  findUserById(id:number): Observable<User> {
      return this.http.get<User>(`http://localhost:8000/api/user/${id}`);
  }

  suspendingMember(id:number): Observable<any> {
    return this.http.put(`http://localhost:8000/api/user/suspending/${id}`,{});
  }

  reactivateMember(id:number): Observable<any>{
    return this.http.put(`http://localhost:8000/api/user/reactivate/${id}`,{});
  }

  newUser(user:FormData):Observable<any>{
      return this.http.post('http://localhost:8000/api/newUser',user);
    }

   getUserProfile(id:number):Observable<any>{
      return this.http.get('http://localhost:8000/api/user/profile/${id');
    }

    getAllEmployee(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:8000/api/getAllEmployee');
    }

}
