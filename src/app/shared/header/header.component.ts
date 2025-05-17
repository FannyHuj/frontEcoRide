import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RoleType } from '../../models/roleType';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    successMessage: string | null = null; // Variable pour stocker le message de connexion réussie



constructor(private authService : AuthService,private router: Router) {
}

 
getRole():string{
  if(this.authService.hasRole([RoleType.ADMIN])){
    return "AdminSpace";
  }else if (this.authService.hasRole([RoleType.EMPLOYE])){
    return "EmployeeSpace";
  }else if (this.authService.hasRole([RoleType.USER])){
    return "UserSpace";
  }
    return ""
}

    logout(){
      this.authService.logout();
      this.router.navigateByUrl("/");
     
  }

 

}

  

