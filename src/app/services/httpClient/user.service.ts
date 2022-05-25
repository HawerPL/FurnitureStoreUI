import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${environment.api_url}/User/${id}`);
  }

  getUsers(): Observable<Array<User>>{
    return this.http.get<Array<User>>(`${environment.api_url}/User`);
  }

  changePassword(id: number, oldPassword: string, password: string){
    this.http.patch(`${environment.api_url}/User/${id}`, "");
  }

  deleteUser(id: number){
    this.http.delete(`${environment.api_url}/User/${id}`);
  }

}
