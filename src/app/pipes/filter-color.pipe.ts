import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    return value.filter((color: Color) =>
      color.colorName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }

}
