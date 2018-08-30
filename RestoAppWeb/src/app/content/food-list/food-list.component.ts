import { Component, OnInit } from '@angular/core';
import {Food} from './../../model/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[];
  constructor(private service: FoodService) { }

  ngOnInit() {
   // this.foods = this.service.getFoodList();
   this.service.getPlats();
    // this.service.foods.subscribe(value => (this.foods = value)) ;
  }

}
