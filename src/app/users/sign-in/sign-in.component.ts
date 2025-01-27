import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user:User= {} as User;
  
  signIn(){
    console.log(this.user.pseudo);
    console.log(this.user.mail);
    console.log(this.user.password);
  }

}
