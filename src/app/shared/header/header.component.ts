import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RoleType } from '../../models/roleType';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


constructor(private authService : AuthService) {
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

}

  

