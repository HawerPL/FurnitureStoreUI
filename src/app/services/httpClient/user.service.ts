import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
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

  addUser(User: User): Observable<User>{
    return this.http.post<User>(`${environment.api_url}/User`, User);
  }

  changePassword(id: number, oldPassword: string, password: string){
    return this.http.patch(`${environment.api_url}/User/${id}`, "");
  }

  deleteUser(id: number){
    return this.http.delete(`${environment.api_url}/User/${id}`);
  }

  updateUser(User: User, id: number): Observable<User>{
    return this.http.put<User>(`${environment.api_url}/User/${id}`, User);
  }

  getUserByUsername(username: String): Observable<User>{
    return this.http.get<User>(`${environment.api_url}/User/${username}`);
  }

}
