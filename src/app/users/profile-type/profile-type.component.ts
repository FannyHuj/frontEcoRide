import { Component, output } from '@angular/core';
import { RoleType } from '../../models/roleType';

@Component({
  selector: 'app-profile-type',
  imports: [],
  templateUrl: './profile-type.component.html',
  styleUrl: './profile-type.component.css'
})
export class ProfileTypeComponent {
role:RoleType= {} as RoleType;
roleUpdate = output<RoleType>();

addNewRole(role:string){
  this.roleUpdate.emit(this.role);
}

}
