import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { DonateListComponent } from './components/donate-list/donate-list.component';
import { DonateFormComponent } from './components/donate-form/donate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DonateService } from './service/donate.service';


@NgModule({
  declarations: [
    DonateComponent,
    DonateListComponent,
    DonateFormComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    DonateComponent,
    DonateListComponent,
    DonateFormComponent
  ],
  providers:[
    DonateService
  ]
})
export class DonateModule { }
