import { Component } from '@angular/core';
import { AdmimTripChartComponent } from '../admim-trip-chart/admim-trip-chart.component';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { RoleType } from '../../models/roleType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-space',
  imports: [AdmimTripChartComponent,CommonModule,RouterLink],
  templateUrl: './admin-space.component.html',
  styleUrl: './admin-space.component.css'
})
export class AdminSpaceComponent {

  
  users:User[]=[];
  user: User= {} as User;

  constructor(private userService: UsersService) {
    console.log("Constructor called")
    this.userService.getAllUsers().subscribe((data:User[]) => {
      this.users=data;
    });
  }

  suspendingMember(id: number) {
    this.userService.suspendingMember(id).subscribe();
}

  reactivateMember(id: number){
    console.log('Reactivate user with ID:', id);
    this.userService.reactivateMember(id).subscribe();
  }

  loadUsers(){
   
    this.users=this.users.filter(user=>user.roles.includes(RoleType.USER)); 
    
    
  }

  loadEmployee(){
    return this.users.filter(user=>user.roles.includes(RoleType.EMPLOYE));
  }

}
