import { Component, OnInit } from '@angular/core';
import {Type} from './../../model/type';
import {TypeService} from './../../services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  type: Type = { id: 0, nom: ''};
  constructor(private service: TypeService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('service called');
    this.service.addType(this.type);

  }

}
