import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnyComponent } from './eny.component';

const routes: Routes = [{ path: '', component: EnyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnyRoutingModule { }
