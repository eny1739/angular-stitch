import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnyRoutingModule } from './eny-routing.module';
import { EnyComponent } from './eny.component';


@NgModule({
  declarations: [
    EnyComponent
  ],
  imports: [
    CommonModule,
    EnyRoutingModule
  ]
})
export class EnyModule { }
