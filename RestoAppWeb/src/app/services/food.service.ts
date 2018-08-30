import { Injectable } from '@angular/core';
import { Food} from './../model/food';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/* const MOCk = [
   new Food(1, 'Pizza Rein', 'C\'est une pizza c\'est tout :p', 10.34),
   new Food(2, 'Hambourger', 'C\'est une Hambourger c\'est tout :p', 10.34),
     new Food(3, 'Cheese Bourger', 'C\'est un Cheese Bourger c\'est tout :p',  10.34)
]; */

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foods: Observable<Food[]>;

  /*  getFoodList(): Food[] {
    return MOCk;
  } */
  constructor(private http: HttpClient) {}
  getPlats(): void {
    this.foods = this.http.get<Food[]>('http://localhost:9090/plats');
    console.log(this.foods);
  }
  getPlat(id: string) {
    return this.http.get('http://localhost:9090/plats/' + id);
  }

  addPlat(food: Food) {
    console.log('food is : \n' + food);
    this.http.post('http://localhost:9090/plats', food ).subscribe();

  }
  updatePlat(food: Food) {
    console.log('food is : \n' + food);
    this.http.put('http://localhost:9090/plats', food ).subscribe();

  }

  deletePlat(id: number) {
    console.log('food id' + id);
    this.http.delete('http://localhost:9090/plats/' + id ).subscribe();

  }

 /*  getPlat(id: string): Observable<Food> {
    return this.http.get<Food>('http://localhost:9090/plats/' + id);
  } */

  /* getPlats(): Observable<any[]> {
       return this.http.get<any[]>('localhost:9090/plats');
  } */
}
