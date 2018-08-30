import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {  catchError, first } from 'rxjs/operators';
import { Food } from '../model/food';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root'
})
export class FoodResolverService  implements Resolve<Food> {
  constructor(private foodSrv: FoodService, private router: Router) {}
    resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');

    return this.foodSrv.getPlat(id).pipe(
      first(),
      catchError(error => {
        console.log('error !!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        this.router.navigateByUrl('/');
        return of(null);
      })
    );
  }
   }


