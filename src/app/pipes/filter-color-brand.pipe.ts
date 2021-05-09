import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterColorBrand'
})
export class FilterColorBrandPipe implements PipeTransform {
  transform(value: CarDetail[], filterColorBrand: string[]): CarDetail[] {
    return filterColorBrand
      ? value
          .filter(
            (carDetail: CarDetail) =>
              carDetail.brandName.indexOf(filterColorBrand[1]) !== -1
          )
          .filter(
            (carDetail: CarDetail) =>
              carDetail.colorName.indexOf(filterColorBrand[0]) !== -1
          )
      : value;
  }
}
