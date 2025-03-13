import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { TripService } from '../../trip/services/trip.service';
import { RoleType } from '../../models/roleType';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user:User= {} as User;
   constructor (private tripService: TripService,){} // Injection du service pour utiliser la fonction signIn()
  
  signIn(){
    console.log(this.user.pseudo);
    console.log(this.user.mail);
    console.log(this.user.password);
  

    this.user.credit=20; // Ajout de 20 crédit à la création d'un compte utilisateur
    this.user.role.push(RoleType.USER); // Création d'un compte utilisateur
    this.tripService.signIn(this.user).subscribe(); // Envoie du compte crée à PHP
  }

  //validatePassword(password:string){
  //  let pattern=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=~]).{8,}$'); // verification mot de passe
  //  return pattern.test(password);
  //}

}
