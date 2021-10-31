import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { DonateListComponent } from './components/donate-list/donate-list.component';
import { DonateFormComponent } from './components/donate-form/donate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DonateService } from './service/donate.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    SharedModule,
    Ng2SearchPipeModule
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
