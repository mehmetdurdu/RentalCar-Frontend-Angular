import { CarUpdateComponent } from '../../../components/cars/car-update/car-update.component';
import { RentalAddComponent } from '../../../components/rentals/rental-add/rental-add.component';
import { CreditCardsComponent } from '../../../components/credit-cards/credit-cards.component';
import { ProfileComponent } from '../../../components/profile/profile.component';
import { ColorUpdateComponent } from '../../../components/colors/color-update/color-update.component';
import { BrandUpdateComponent } from '../../../components/brands/brand-update/brand-update.component';
import { LoginGuard } from '../../../guards/login.guard';
import { CarAddComponent } from '../../../components/cars/car-add/car-add.component';
import { BrandAddComponent } from '../../../components/brands/brand-add/brand-add.component';
import { ColorAddComponent } from '../../../components/colors/color-add/color-add.component';
import { UsersComponent } from '../../../components/users/users.component';
import { RentalComponent } from '../../../components/rentals/rental/rental.component';
import { ColorComponent } from '../../../components/colors/color/color.component';
import { CarDetailComponent } from '../../../components/cars/car-detail/car-detail.component';
import { BrandComponent } from '../../../components/brands/brand/brand.component';
import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarDetailComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'rental',
    component: RentalComponent,
  },
  {
    path: 'user',
    component: UsersComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarDetailComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarDetailComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarDetailComponent,
  },
  {
    path: 'car/rent/:carId',
    component: RentalAddComponent,
  },
  {
    path: 'colors/add',
    component: ColorAddComponent,
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'creditCard/add',
    component: CreditCardsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'colors/update/:colorId',
    component: ColorUpdateComponent,
  },
  {
    path: 'brands/update/:brandId',
    component: BrandUpdateComponent,
  },
  {
    path: 'users/update/:userId',
    component: ProfileComponent,
  },
  {
    path: 'car/update/:carId',
    component: CarUpdateComponent,
  },
];