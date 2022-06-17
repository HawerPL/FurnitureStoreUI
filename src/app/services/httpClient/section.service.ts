import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/Section';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  getSection(id: number): Observable<Section>{
    return this.http.get<Section>(`${environment.api_url}/Section/${id}`);
  }

  getSections(): Observable<Array<Section>>{
    return this.http.get<Array<Section>>(`${environment.api_url}/Section`);
  }

  addSection(section: Section){
    return this.http.post<Section>(`${environment.api_url}/Section`, section);
  }

  deleteSection(id: number) {
    return this.http.delete(`${environment.api_url}/Section/${id}`);
  }

  updateSection(section: Section): Observable<Section>{
    return this.http.post<Section>(`${environment.api_url}/Section/`, section);
  }
}
