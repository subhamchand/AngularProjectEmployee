// tslint:disable-next-line: max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule,MatAutocompleteModule , MatTableModule, MatSnackBarModule
  } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatTableModule, MatSnackBarModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatTableModule, MatSnackBarModule
  ],
})
export class MyOwnCustomMaterialModule { }
