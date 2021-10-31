import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestBookRoutingModule } from './guest-book-routing.module';
import { GuestBookComponent } from './guest-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    GuestBookComponent
  ],
  imports: [
    CommonModule,
    GuestBookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ]
})
export class GuestBookModule { }
