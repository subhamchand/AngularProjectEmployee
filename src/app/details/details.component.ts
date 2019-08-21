import { Component, OnInit } from '@angular/core';
import { SaveEmployee } from '../employee.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { SnackBarService } from '../snackbar.service';
import { MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private employee: SaveEmployee, private router: Router, private dialog: DialogService, 
              private snack: SnackBarService, private matcon: MatSnackBarConfig ) { }
  detailsEmployee;

  ngOnInit() {
    this.getEmpDetails();
    // console.log('details employee : ' + this.detailsEmployee);
  }
  ngEdit(emp) {
    this.dialog.onOpenTopup(emp).subscribe(
      (response) => {
        // console.log(response);
        this.getEmpDetails();
        console.log(this.detailsEmployee);
      }
    );
  }
  ngDelete(id) {
    this.employee.deleteEmployee(id).subscribe( res =>{
      console.log('deleted emp');
      this.getEmpDetails();
      this.snack.showSnackBar('Employee Deleted');
      // this.matcon.duration = 2000;
    });
  }
  getEmpDetails() {
    this.employee.getEmployeeDetails().subscribe(res => {
      this.detailsEmployee = res;
      console.log(res);
      
    });
  }

}
