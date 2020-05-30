import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(element: any[]): string {
    if (!element || !element['images'] || element['images'].length == 0) {
      return 'assets/img/noimage.png';
    }
    return element['images'][0].url;
  }

}
