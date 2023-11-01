import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Fruits[]>('http://localhost:8082/article');
  }
  create(payload: Fruits) {
    return this.http.post<Fruits>('http://localhost:8082/article', payload);
  }
  getById(id: number) {
    return this.http.get<Fruits>(`http://localhost:8082/article`);
   }
    
   update(payload:Fruits){
    return this.http.put(`http://localhost:8082/article`,payload);
   }
   delete(id:number){
    return this.http.delete<Fruits>(`http://localhost:8082/article`);
 }
}
