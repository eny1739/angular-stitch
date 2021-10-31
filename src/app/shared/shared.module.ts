import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { RouterModule } from '@angular/router';
import { EmailPipe } from './pipes/email.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidationMessageComponent,
    EmailPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ValidationMessageComponent,
    EmailPipe
  ]
})
export class SharedModule { }
