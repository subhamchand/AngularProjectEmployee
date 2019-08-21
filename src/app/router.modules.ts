import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TaskComponent } from './task/task.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent},
    { path: 'edit/:id', component: HomeComponent},
    { path: 'pipe', component: FilterComponent},
    { path: 'task', component: TaskComponent}
  ];
