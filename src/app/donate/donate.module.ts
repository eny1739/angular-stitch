import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { DonateListComponent } from './components/donate-list/donate-list.component';
import { DonateFormComponent } from './components/donate-form/donate-form.component';


@NgModule({
  declarations: [
    DonateComponent,
    DonateListComponent,
    DonateFormComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule
  ]
})
export class DonateModule { }
