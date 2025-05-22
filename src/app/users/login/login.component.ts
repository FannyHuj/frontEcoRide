import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../models/login';
import {AuthService} from '../../services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService) {}
  login:Login= {} as Login;
  token:string|null =null;
  successMessage: string | null = null; // Variable pour stocker le message de connexion réussie

  signIn() {
    this.auth.login(this.login).subscribe({
      next: auth => {
        this.auth.setToken(auth.token);
        this.successMessage = 'Connexion réussie !'; // Affichage du message de connexion réussie
      },
      error: err => console.error('Quelque chose s\'est mal passé :', err)
    });
  }

  closeAlert() {
    this.successMessage = null;
  }



}