import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsmaComponent } from './brandsma.component';

const routes: Routes = [{ path: '', component: BrandsmaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsmaRoutingModule { }
