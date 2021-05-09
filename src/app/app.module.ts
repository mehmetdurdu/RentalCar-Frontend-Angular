import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterCarDetailPipe } from './pipes/filter-car-detail.pipe';
import { HiddenCreditCardPipe } from './pipes/hidden-credit-card.pipe';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brands/brand-update/brand-update.component';
import { CarComponent } from './components/cars/car/car.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { RegistersComponent } from './components/registers/registers.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './layouts/admin/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth/auth.component';
import { FilterColorBrandPipe } from './pipes/filter-color-brand.pipe';
import { HomeComponent } from './pages/home/home.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FilterBrandPipe,
    FilterColorPipe,
    FilterCarPipe,
    FilterCarDetailPipe,
    HiddenCreditCardPipe,
    SliceBrandPipe,
    NavbarComponent,
    BrandComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    CarComponent,
    CarAddComponent,
    CarUpdateComponent,
    CarDetailComponent,
    CreditCardsComponent,
    CategoriesComponent,
    UsersComponent,
    RegistersComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    AuthComponent,
    FilterColorBrandPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
