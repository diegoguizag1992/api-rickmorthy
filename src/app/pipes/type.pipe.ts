import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, arg: any): any {

   // console.log(value);
    if (value.length >= 1 ) {
      return  value;
    } else {
      return value = 'No aplica';
    }
  }
}
