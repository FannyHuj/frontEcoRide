import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { TripService } from '../../trip/services/trip.service';
import { UsersService } from '../../services/users.service';
import { RoleType } from '../../models/roleType';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user:User= {} as User;
  role:RoleType[] =[] as RoleType[]
   fileName = '';
  avatar:File = {} as File;
  redirectUrl = '';
 
successMessage: string = '';
  errorMessage: string = '';
   constructor ( private userService : UsersService, private authService:AuthService, private router: Router){
      console.log("SignInComponent constructor called" );
    //Récupére le rôle de l'utilisateur connecté 
    // Si getUser est null c'est que l'utilisateur n'est pas connecté et cherche à créer un compte
    // Si l'utilisateur est connecté et a le rôle ADMIN alors il peut créer un compte employee
     
  //   if(this.authService.getUser()==null){

  //       console.log("user is null");
  //      this.role.push(RoleType.USER)
  //     }else if(this.authService.hasRole([RoleType.ADMIN])){
  //        this.role.push(RoleType.EMPLOYE)
  //     }
  //     this.user.roles = this.role;
  //  } // Injection du service pour utiliser la fonction signIn()

  if(this.authService.isUserConnected()){
    this.authService.getUser().subscribe({
      next: (user) => {
        console.log(" user "+ user.lastName);
        this.user = user;
        if(this.authService.hasRole([RoleType.ADMIN])){
          this.role.push(RoleType.EMPLOYE)
          this.redirectUrl='/AdminSpace';
        }
        this.user.roles = this.role;
      },
      error: (err) => {
        console.error("Erreur lors du chargement de l'utilisateur", err);
      }
    });
  }else{
    console.log("user is null");
     this.role.push(RoleType.USER)
      this.redirectUrl='/';
  }
}
   newUser(event: Event){

    event.preventDefault();

    const formData = new FormData();
    console.log(this.role);

            formData.append("picture", this.avatar);
            formData.append("lastName", this.user.lastName);
            formData.append("firstName", this.user.firstName);
            formData.append("password", this.user.password);
            formData.append("phoneNumber", this.user.phoneNumber);
            formData.append("address", this.user.address);
            formData.append("birthDate", this.user.birthDate);
            formData.append("email", this.user.email);
            formData.append("roles", this.role[0]);
  

    
          this.userService.newUser(formData).subscribe({
            next: (response) => {
              //afficher une notification de succès
              //this.successMessage = 'Utilisateur créé avec succès !';
              
              //faire une attente de 2 seconde
              setTimeout(() => {
                this.successMessage = 'Utilisateur créé avec succès !';
              }, 2000);
              
              //rediriger l'utilisateur vers la page de d'accueil
              this.router.navigate([ this.redirectUrl]);

              console.log("User created successfully", response);
            },
            error: (error) => {
              this.errorMessage = "Erreur lors de la création de l'utilisateur, veuillez recommencer plus tard";
              //afficher une notification d'erreur
              console.error("Error creating user", error);
            }
          });
     }
   onFileSelected(event:any) {

        this.avatar = event.target.files[0];

        if (this.avatar) {

            this.fileName = this.avatar.name;

            
        }
      }

}
