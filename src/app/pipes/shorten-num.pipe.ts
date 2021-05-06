import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenNum'
})
export class ShortenNumPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log('pipe val',value);
    const copy = value + ''
  if  (copy.length > 3 && copy.length <= 6){
    const res = copy.slice(0, copy.length-3)
    return res + 'k'
  }    

  if  (copy.length >= 6 || copy.length <= 9){
    const res = copy.slice(0, copy.length-3)
    return res + 'm'
  }  
return null;
  }

}
