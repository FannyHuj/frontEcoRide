import { Component, Inject } from '@angular/core';
import { Preferences } from '../../models/preferences';
import { FormsModule } from '@angular/forms';
import { PreferencesService } from '../../services/preferences.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferences',
  imports: [FormsModule,CommonModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css'
})
export class PreferencesComponent {

   preference:Preferences={} as Preferences;
   userConnected:User={} as User;
  tag: string=' '; 

    constructor(private service:PreferencesService, private authService:AuthService) { 
    this.authService.getUser().subscribe({ // Souscription à l'observable getUser()
        next: (user) => {
          this.userConnected = user; // Stocke l'utilisateur récupéré
        },
        error: (err) => {
          console.error("Erreur", err);
        }
      })
      
      this.preference.tags = [];
      this.preference.animals = false;
      this.preference.smoking = false;
     };
    
   

   addPreferences(){
  this.service.addPreferences(this.userConnected.id, this.preference).subscribe({
    next:(data)=>{
      console.log("Préférences enregistrées :", data);
    },
    error:(error)=>{
      console.log("Erreur lors de l'enregistrement :", error);
    }
  });
}


  

  addTag(){
    this.preference.tags.push(this.tag);
    console.log(this.preference.tags);
    this.tag = ''; // Réinitialiser le champ de saisie après l'ajout
  }


}
