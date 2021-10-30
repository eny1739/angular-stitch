import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestBookComponent } from './guest-book.component';
import { GuestBookService } from './services/guest-book.service';

const routes: Routes = [
  { path: '', component: GuestBookComponent },
  { path: ':id', component: GuestBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestBookRoutingModule { }
