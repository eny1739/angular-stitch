import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KenjiComponent } from './kenji.component';

const routes: Routes = [{ path: '', component: KenjiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KenjiRoutingModule { }
