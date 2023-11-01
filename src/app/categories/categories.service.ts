import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Category[]>('http://localhost:8082/Category');
  }
  create(payload: Category) {
    return this.http.post<Category>('http://localhost:8082/Category', payload);
  }
  getById(id: number) {
    return this.http.get<Category>(`http://localhost:8082/Category`);
   }
    
   update(payload:Category){
    return this.http.put(`http://localhost:8082/Category`,payload);
   }
   delete(id:number){
    return this.http.delete<Category>(`http://localhost:8082/Category`);
 }
}