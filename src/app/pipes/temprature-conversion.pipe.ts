import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'tempConverter'
})

export class TempaeratureConversion implements PipeTransform {
  transform(value: number, unit: string) {
    if(unit === 'C' || unit === 'c') {
      var temp = (value - 32) / 1.8;
      return temp;
    } else if(unit === 'F' || unit === 'f') {
      var temp = (value * 1.8) + 32;
      return temp;
    }
  }
}