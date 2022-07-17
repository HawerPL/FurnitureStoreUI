import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  currentUserUsername: string;
  currentUserRole: string;
  notifier: NotifierService;

  constructor(private http: HttpClient) {

   }

  authenticate(username, password) {
    return this.http.post<JwtResponse>(`${environment.api_url}/authenticate`, { username, password }).pipe(
      map(
          userData => {
          sessionStorage.setItem('username', username);
          this.currentUserUsername = username;
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      ),
      catchError((err) => {
        sessionStorage.removeItem('token');
        return err;
      })
    );
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem('token') == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
  }
}

export interface JwtResponse {
  token?: string
}
