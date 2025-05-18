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
   fileName = '';
  avatar:File = {} as File;
 

   constructor ( private userService : UsersService, private authService:AuthService){
      if(this.authService.getUser()==null){
       this.role.push(RoleType.USER)
      }else if(this.authService.hasRole([RoleType.ADMIN])){
         this.role.push(RoleType.EMPLOYE)
      }
      this.user.roles = this.role;
   } // Injection du service pour utiliser la fonction signIn()
  
   newUser(){

    const formData = new FormData();
    console.log(this.avatar);

            formData.append("picture", this.avatar);
            formData.append("lastName", this.user.lastName);
            formData.append("firstName", this.user.firstName);
            formData.append("password", this.user.password);
            formData.append("phoneNumber", this.user.phoneNumber);
            formData.append("address", this.user.address);
            formData.append("birthDate", this.user.birthDate);
            formData.append("email", this.user.email);

    
    this.userService.newUser(formData).subscribe(); // Envoie du compte crée à PHP
  }

  //validatePassword(password:string){
  //  let pattern=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=~]).{8,}$'); // verification mot de passe
  //  return pattern.test(password);
  //}

   onFileSelected(event:any) {

        this.avatar = event.target.files[0];

        if (this.avatar) {

            this.fileName = this.avatar.name;

            
        }
      }

}
