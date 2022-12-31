import { Pipe, PipeTransform } from '@angular/core';
import { DayjsService } from '../../services/dayjs/dayjs.service';

@Pipe({
  name: 'dateFormats'
})
export class DateFormatsPipe implements PipeTransform {
  constructor(private dayJsService: DayjsService) {}

  transform(value: string, format: string): string {
    if(value) {
      return this.dayJsService.dayJs(value).format(format);
    }

    return '';
  }

}
