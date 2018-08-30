import { Component, OnInit } from '@angular/core';

import { Food } from '../../model/food';
import { FoodService } from '../../services/food.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})

export class AddFoodComponent implements OnInit {
  plat: Food = { id: 0, nom: '', description: '', prix: 1 };
  constructor(private service: FoodService, private typeService: TypeService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('service called');
    this.service.addPlat(this.plat);

  }

}
