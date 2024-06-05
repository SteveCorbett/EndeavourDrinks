import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';

@Pipe({
  name: 'formatValue',
  standalone: true,
})
export class FormatValuePipe implements PipeTransform {
  transform(value: number | undefined, format: string = '1.0-0'): string {
    if (value === undefined || value === 0) {
      return '';
    } else {
      /// ToDo: Obtain locale from LOCALE_ID
      return formatNumber(value, 'EN-AU', format);
    }
  }
}
