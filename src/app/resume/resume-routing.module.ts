import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  { path: 'kenji', loadChildren: () => import('./kenji/kenji.module').then(m => m.KenjiModule) },
  { path: 'eny', loadChildren: () => import('./eny/eny.module').then(m => m.EnyModule) },
  { path: 'brandsma', loadChildren: () => import('./brandsma/brandsma.module').then(m => m.BrandsmaModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
