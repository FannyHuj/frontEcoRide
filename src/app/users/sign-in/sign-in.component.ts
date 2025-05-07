import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { TripService } from '../../trip/services/trip.service';
import { RoleType } from '../../models/roleType';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user:User= {} as User;
   constructor (private tripService: TripService, private userService : UsersService){} // Injection du service pour utiliser la fonction signIn()
  
   newUser(){
    this.userService.newUser(this.user).subscribe(); // Envoie du compte crée à PHP
  }

  //validatePassword(password:string){
  //  let pattern=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=~]).{8,}$'); // verification mot de passe
  //  return pattern.test(password);
  //}

}
