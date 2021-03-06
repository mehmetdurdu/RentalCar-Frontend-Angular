import { RegistersComponent } from '../../../components/registers/registers.component';
import { LoginComponent } from '../../../components/login/login.component';
import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistersComponent },
];