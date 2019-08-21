import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  Data = [
    { date: '20 Aug', ticketId: '111', summary: 'Regression', status: 'Assigned'},
    { date: '21 Aug', ticketId: '222', summary: 'dfdfgdgdf', status: 'Assigned'},
    { date: '22 Aug', ticketId: '333', summary: 'dfgsdfsdf', status: 'In Progress'},
    { date: '23 Aug', ticketId: '444', summary: 'asdadasd', status: 'Assigned'},
    { date: '24 Aug', ticketId: '555', summary: 'vfgreg', status: 'Done'},
    { date: '25 Aug', ticketId: '666', summary: 'wqertgdfvz', status: 'Done'},
    { date: '26 Aug', ticketId: '777', summary: 'sdrth', status: 'In Progress'}
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
