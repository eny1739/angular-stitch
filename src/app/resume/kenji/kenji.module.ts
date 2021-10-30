import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KenjiRoutingModule } from './kenji-routing.module';
import { KenjiComponent } from './kenji.component';


@NgModule({
  declarations: [
    KenjiComponent
  ],
  imports: [
    CommonModule,
    KenjiRoutingModule
  ]
})
export class KenjiModule { }
