import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../models/login';
import {AuthService} from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService) {}
  login:Login= {} as Login;
  token:string|null =null;

  signIn(){
  
    this.auth.login(this.login).subscribe({
      next: auth => this.auth.setToken(auth.token),
      error: err => console.error('Quelque chose s\'est mal passé :', err)
    });
  }
}
