import { HttpClient } from '@angular/common/http';HttpClient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${environment.api_url}/Product/${id}`);
  }

  getProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${environment.api_url}/Product`);
  }

  addProduct(Product: Product): Observable<Product>{
    return this.http.post<Product>(`${environment.api_url}/Product`, Product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.api_url}/Product/${id}`);
  }

  // updateProduct(Product: Product): Observable<Product>{
  //   return this.http.post<Product>(`${environment.api_url}/Product`, Product);
  // }
}
