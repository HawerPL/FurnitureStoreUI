import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(`${environment.api_url}/Category/${id}`);
  }

  getCategories(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(`${environment.api_url}/Category`);
  }

  addCatgory(category: Category): Observable<Category>{
    return this.http.post<Category>(`${environment.api_url}/Category`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${environment.api_url}/Category/${id}`);
  }

  // updateCategory(category: Category): Observable<Category>{
  //   return this.http.post<Category>(`${environment.api_url}/Category/`, category);
  // }

}
