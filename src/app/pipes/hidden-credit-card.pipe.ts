import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenCreditCard'
})
export class HiddenCreditCardPipe implements PipeTransform {

  transform(creditCardNo: string): string {
    return creditCardNo.substring(creditCardNo.length - 3).padStart(16, '*');
  }

}
