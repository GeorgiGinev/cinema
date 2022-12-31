import { Injectable } from '@angular/core';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import arraySupport from 'dayjs/plugin/arraySupport'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DateFormatsEnum } from '../../enums/date-formats';

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(arraySupport);

@Injectable({
  providedIn: 'root'
})
export class DayjsService {
  constructor() {}

  public dayJs(date: string | null = null): dayjs.Dayjs {
    if(date) {
      return dayjs(new Date(date));
    }
    
    return dayjs();
  }
}
