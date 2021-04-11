import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    return value.filter((brand: Brand) =>
      brand.brandName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }

}
