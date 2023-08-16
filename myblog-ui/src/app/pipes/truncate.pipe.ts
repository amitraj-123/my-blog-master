import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length < limit ? value : value.slice(0, limit) + '...';
  }
  //Monorepo and Polyrepo MS
  //Monorepo==>This is used to commmunicate between and to an fro .
  //Polyrepo==> This is used to 
}
