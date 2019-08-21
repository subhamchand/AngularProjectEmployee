import { Injectable, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';

@Injectable()
export class DialogService {

  constructor(private matDialog: MatDialog) {
    // console.log(data)
   }

   onOpenTopup(emp) {
    // this.matDialog.open(EditComponent);
    console.log('inside service',emp)
    let dialogRef: MatDialogRef<EditComponent>;
    dialogRef = this.matDialog.open(EditComponent);
    dialogRef.componentInstance.employeeUpdate = emp;
    return dialogRef.afterClosed();
  }
}
