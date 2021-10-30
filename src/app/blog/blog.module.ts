import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    BlogComponent,
    ViewMoreComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BlogModule { }
