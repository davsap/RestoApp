import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodListComponent } from '../content/food-list/food-list.component';
import {RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from '../content/food-detail/food-detail.component';
import { FoodResolverService } from '../services/food-resolver.service';
import { AddFoodComponent } from '../content/add-food/add-food.component';
import { TypeComponent } from '../content/type/type.component';

const routes: Routes = [
  {path : '', component : FoodListComponent},
  {path : 'addtype', component : TypeComponent},
  {path : 'platdetail/:id',
    component : FoodDetailComponent,
    resolve: {
      food: FoodResolverService
    }
  },
  {path : 'add', component : AddFoodComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [FoodResolverService]
})
export class AppRoutingModule {
}
