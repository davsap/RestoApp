import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FormsModule } from '@angular/forms';
import { TypeComponent } from './type/type.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule , FormsModule
  ],
  declarations: [ContentComponent, FoodCardComponent, FoodListComponent, FoodDetailComponent, AddFoodComponent, TypeComponent],
  exports: [ FoodCardComponent, FoodListComponent]
})
export class ContentModule { }
