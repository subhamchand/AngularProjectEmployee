import { Component } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent {
  mygroup = ['Subham', 'Shantanu', 'Pallavi', 'Geetika', 'Mrigya'];
  name: any;
  constructor() { }

}
