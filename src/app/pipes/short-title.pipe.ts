import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle',
  standalone: true
})
export class ShortTitlePipe implements PipeTransform {

  transform(term:string): string {
    return term.split(' ').slice(0, 2).join(' ');
  }

}
