export interface CreditCard {
    id: number;
    customerId: number;
    fullName: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvc: string;
    cardType: string;
  }