import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
})
export class AdminModule {}
