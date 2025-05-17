import { Component } from '@angular/core';
import { User } from '../../models/user';
import { TripService } from '../../trip/services/trip.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-employee-registration',
  imports: [],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {

   user:User= {} as User;
     constructor (private tripService: TripService, private userService : UsersService){} // Injection du service pour utiliser la fonction signIn()
    
   

}
