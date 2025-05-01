import { Component } from '@angular/core';
import { AdmimTripChartComponent } from '../admim-trip-chart/admim-trip-chart.component';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-admin-space',
  imports: [AdmimTripChartComponent,CommonModule],
  templateUrl: './admin-space.component.html',
  styleUrl: './admin-space.component.css'
})
export class AdminSpaceComponent {

  users:User[]=[];
  user: User= {} as User;

  constructor(private userService: UsersService) {
    this.userService.getAllUsers().subscribe((data:User[]) => {
      this.users=data;
    });
  }

  suspendingMember(id: number) {
    console.log('Suspending user with ID:', id);
    this.userService.suspendingMember(id).subscribe;
}
}
