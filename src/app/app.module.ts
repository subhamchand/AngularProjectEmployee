import { SnackBarService } from './snackbar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyOwnCustomMaterialModule } from './material.modules';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './router.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveEmployee } from './employee.service';
import { EditComponent } from './edit/edit.component';
import { DialogService } from './dialog.service';
import { CustomPipe } from './home/customPipe';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarConfig } from '@angular/material';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    EditComponent,
    CustomPipe,
    FilterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents: [
    EditComponent
  ],
  providers: [SaveEmployee, DialogService, SnackBarService, MatSnackBarConfig ],
  bootstrap: [AppComponent]
})
export class AppModule { }
