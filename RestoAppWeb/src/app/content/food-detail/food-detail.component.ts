import { Component, OnInit, Input } from '@angular/core';
import {Food} from './../../model/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
 food: Food;

  constructor(private route: ActivatedRoute , private service: FoodService) { }

  ngOnInit() {
    this.route.data.subscribe( (data: {food: Food}) => {this.food = data.food; });

  }

 onDelete() {
    console.log('deleting food ::' + this.food.id);
    this.service.deletePlat(this.food.id);
  }

 onEdit() {
    console.log('update food ::' + this.food.id);
   }

}
