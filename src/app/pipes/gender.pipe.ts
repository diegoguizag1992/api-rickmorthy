import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if (value === 'Male') {
      return value = 'Masulino';
    } else if (value === 'Female') {
      return value = 'Femenino';
    } else {
      return value = 'Desconocido';
    }
  }
}

