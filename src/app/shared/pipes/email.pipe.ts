import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    return `<a
    href="mailto:${value}"
    >${value}</a
  >`
  }

}
