import { Component } from '@angular/core';
import { AdmimTripChartComponent } from '../admim-trip-chart/admim-trip-chart.component';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { RoleType } from '../../models/roleType';
import { RouterLink } from '@angular/router';
import { TripService } from '../../trip/services/trip.service';
import { Statistics } from '../../models/statistics';
import { Dashboard } from '../../models/Dashboard';

@Component({
  selector: 'app-admin-space',
  imports: [AdmimTripChartComponent,CommonModule,RouterLink],
  templateUrl: './admin-space.component.html',
  styleUrl: './admin-space.component.css'
})
export class AdminSpaceComponent {

  
  users:User[]=[]; 
  employees:User[]=[];
   members:User[]=[];
  user: User= {} as User;
  dashboard: Dashboard = {} as Dashboard;

  constructor(private tripService: TripService,private userService: UsersService) {
    console.log("Constructor called")
      this.loadAllUsers();
       this.tripService.getTotalInfo().subscribe((data) => {
       this.dashboard = data;
    });
  }

  loadAllUsers(){
    this.userService.getAllUsers().subscribe((data:User[]) => {
      this.users=data;
      console.log(this.users);
    });
  }

  suspendingMember(id: number) {
    this.userService.suspendingMember(id).subscribe();
    this.loadAllUsers();
}

  reactivateMember(id: number){
    console.log('Reactivate user with ID:', id);
    this.userService.reactivateMember(id).subscribe();
     this.loadAllUsers();
  }

  loadUsers(){
   
    return this.members=this.users.filter(user=>user.roles.includes(RoleType.USER)); 
    
    
  }

  loadEmployee(){
    return this.employees=this.users.filter(user=>user.roles.includes(RoleType.EMPLOYE));
  }

}
