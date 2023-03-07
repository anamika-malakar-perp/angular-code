import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitalConversion',
})

// Logic 1 bit    = 0 & 1
// 1 byte         = 8bit
// 8 bits         = 1 byte
// 1024 bytes     = 1 kilobyte
// 1024 kilobytes = 1 megabyte
// 1024 megabytes = 1 gigabyte
// 1024 gigabytes = 1 terabyte
// 1024 TB        = 1 PB(Peta)
// 1024 PB        = 1EB(Exa)
// 1024 EB        = 1ZB(Zetta)
// 1024 ZB        = 1YB(Yotta)
export class DigitalConversion implements PipeTransform {
  transform() {}
}
