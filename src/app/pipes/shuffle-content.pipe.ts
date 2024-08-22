import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleContent',
  standalone: true
})
export class ShuffleContentPipe implements PipeTransform {

  transform(array: any[]): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
    // Fisher-Yates Shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
}
