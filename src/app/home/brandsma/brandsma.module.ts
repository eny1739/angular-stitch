import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsmaRoutingModule } from './brandsma-routing.module';
import { BrandsmaComponent } from './brandsma.component';


@NgModule({
  declarations: [
    BrandsmaComponent
  ],
  imports: [
    CommonModule,
    BrandsmaRoutingModule
  ]
})
export class BrandsmaModule { }
