import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestBookRoutingModule } from './guest-book-routing.module';
import { GuestBookComponent } from './guest-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GuestBookComponent
  ],
  imports: [
    CommonModule,
    GuestBookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class GuestBookModule { }
