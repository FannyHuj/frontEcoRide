import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export function AuthInterceptorService (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auth = inject(AuthService); // Injection du service d'authentification
  const token = auth.getToken(); // Récupération du token JWT

  if (!token) { 
    return next(req)
  }

  const headers = new HttpHeaders({
    "Authorization": 'Bearer '+token
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
}
