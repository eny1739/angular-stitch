import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DonateModule } from '../donate/donate.module';
import { DonateFormComponent } from '../donate/components/donate-form/donate-form.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DonateModule
  ]
})
export class HomeModule { }
