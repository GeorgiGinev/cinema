import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number | string): unknown {
    let num = value;

    var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

    return '$' + with2Decimals;
  }

}
