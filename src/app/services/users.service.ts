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
      return this.http.get<User[]>('http://localhost:8000/api/admin/getAllUsers');
    }

  findUserById(id:number): Observable<User> {
      return this.http.get<User>(`http://localhost:8000/api/user/${id}`);
  }

  suspendingMember(id:number): Observable<any> {
    return this.http.put(`http://localhost:8000/api/user/suspending/${id}`,{});
}
}
