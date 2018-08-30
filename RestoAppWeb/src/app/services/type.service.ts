import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Type } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  types: Observable<Type[]>;

  constructor(private http: HttpClient) {}
  getTypes(): void {
    this.types = this.http.get<Type[]>('http://localhost:9090/types');
    console.log(this.types);
  }
  getType(id: string) {
    return this.http.get('http://localhost:9090/types/' + id);
  }

  addType(type: Type) {
    this.http.post('http://localhost:9090/types', type ).subscribe();

  }
}
