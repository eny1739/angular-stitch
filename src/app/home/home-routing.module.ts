import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./kenji/kenji.module').then(m => m.KenjiModule) }, 
  { path: 'brandsma', loadChildren: () => import('./brandsma/brandsma.module').then(m => m.BrandsmaModule) }, 
  { path: 'eny', loadChildren: () => import('./eny/eny.module').then(m => m.EnyModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
