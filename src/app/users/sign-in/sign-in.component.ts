import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { TripService } from '../../trip/services/trip.service';
import { UsersService } from '../../services/users.service';
import { RoleType } from '../../models/roleType';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user:User= {} as User;
  role:RoleType[] =[] as RoleType[]
   constructor ( private userService : UsersService, private authService:AuthService){
      if(this.authService.getUser()==null){
       this.role.push(RoleType.USER)
      }else if(this.authService.hasRole([RoleType.ADMIN])){
         this.role.push(RoleType.EMPLOYE)
      }
      this.user.roles = this.role;
   } // Injection du service pour utiliser la fonction signIn()
  
   newUser(){
    
    this.userService.newUser(this.user).subscribe(); // Envoie du compte crée à PHP
  }

  //validatePassword(password:string){
  //  let pattern=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=~]).{8,}$'); // verification mot de passe
  //  return pattern.test(password);
  //}

}
