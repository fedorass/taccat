import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrainingsCalendarComponent } from './trainings/trainings-calendar/trainings-calendar.component';
import { TrainingsDetailsComponent } from './trainings/trainings-details/trainings-details.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'trainings/calendar', component: TrainingsCalendarComponent },
  { path: 'trainings/details', component: TrainingsDetailsComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
