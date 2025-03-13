import { Component, input, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import {AddNewCarComponent} from '../../trip/add-new-car/add-new-car.component';
import { Car } from '../../models/car';
import { ProfileTypeComponent } from '../profile-type/profile-type.component';
import { PreferencesComponent } from '../preferences/preferences.component';


@Component({
  selector: 'app-user-space',
  imports: [AddNewCarComponent,ProfileTypeComponent,PreferencesComponent],
  templateUrl: './user-space.component.html',
  styleUrl: './user-space.component.css'
})
export class UserSpaceComponent {

  userConnected = {} as User; // Déclaration de la variable userSpace qui va stocker l'utilisateur récupéré du token grâce à la fonction getUser()
  carCreated = input<Car>({} as Car);

  validateProfile(){
    this.userConnected.car.push(this.carCreated());
  }

  constructor(private authService: AuthService) { // Injection du service AuthService pour utiliser la fonction getUser()
    this.authService.getUser().subscribe({ // Souscription à l'observable getUser()
      next: (user) => {
        this.userConnected = user; // Stocke l'utilisateur récupéré
      },
      error: (err) => {
        console.error("Erreur", err);
      }
    });
  }

}  