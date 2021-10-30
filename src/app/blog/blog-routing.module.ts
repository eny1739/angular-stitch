import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'detail/:url', component: ViewMoreComponent },
  { path: ':id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
