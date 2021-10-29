import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message, [validation-message]',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input() control!: AbstractControl;
  @Input() fieldLabel!: string;

  message: any = {
    "required": `Field %s harus diisi`,
    "minlength": `Field %s minimal harus lebih panjang dari %s.`,
    "email": `Field %s harus berupa email yang valid`
  }

  isFieldValid(): boolean{
    return this.control.invalid && this.control.touched;
  }

  displayErrors(): string {
    // let i = 0;
    let message = '';
    const errors = this.control.errors;

    for( let key in errors) {
      const error : any[] = errors[key] ? Object.values(errors[key]) : [];
      const params: any[] = [this.fieldLabel].concat(error);
      const valMessage: string = this.message[key];

      message += `<p class="m-0">${this.formatString(valMessage, params)}</p>`
    }

    return message
  }

  private formatString(text: string, params:any[]){
    let i = 0;

    return (text ? text.replace(/%s/g, () => params.slice(i, ++i) as any) : '')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
