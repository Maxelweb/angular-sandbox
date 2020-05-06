import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): any {
  return value.split(' ').map((word: string) => 
    ' ' + word.substr(0,1).toLocaleUpperCase()
    + word.substr(1)).join('');
  }

}
