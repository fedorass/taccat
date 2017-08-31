import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageFooterComponent } from './common/page-footer/page-footer.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrainingsCalendarComponent } from './trainings/trainings-calendar/trainings-calendar.component';
import { TrainingsDetailsComponent } from './trainings/trainings-details/trainings-details.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProductComponent } from './catalog/product/product/product.component';
import { CategoriesComponent } from './catalog/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageHeaderComponent,
    HomeComponent,
    ContactsComponent,
    TrainingsCalendarComponent,
    TrainingsDetailsComponent,
    CatalogComponent,
    ProductComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
