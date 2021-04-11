import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterCarDetailPipe } from './pipes/filter-car-detail.pipe';
import { HiddenCreditCardPipe } from './pipes/hidden-credit-card.pipe';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorsComponent } from './components/colors/colors.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterBrandPipe,
    FilterColorPipe,
    FilterCarPipe,
    FilterCarDetailPipe,
    HiddenCreditCardPipe,
    SliceBrandPipe,
    CarFilterComponent,
    CarImageComponent,
    CarsComponent,
    ColorsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
