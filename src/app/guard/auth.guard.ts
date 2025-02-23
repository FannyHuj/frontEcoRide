import { CanActivateFn } from '@angular/router';
import { RoleType } from '../models/roleType';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject (AuthService); // Injection du service d'authentification
  const requiredRoles = route.data['roles'] as RoleType[]; // Récupération des rôles requis pour la route
  if (authService.hasRole(requiredRoles)) { // Vérification des autorisations
    return true; // Autorise l'accès si l'utilisateur a le bon rôle
  }
  return false; // Sinon, bloque l'accès
}
