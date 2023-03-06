import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'numberPipe'
})

export class ConvertNumber implements PipeTransform {
  transform(n: number) {
    return n * 1000;
  }
}