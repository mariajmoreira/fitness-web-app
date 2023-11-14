import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmptyPipe'
})
export class DashIfEmptyPipePipe implements PipeTransform {

  transform<T>(value: T | undefined | null): T | any {
    if (value === undefined || value === null || value === '') {
      return '-';
    }
    if (typeof value === 'number' && isNaN(value)) {
      return '-';
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return '-';
    }
    return value;
  }

}


