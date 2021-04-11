import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = "https://localhost:44323/api/";

  constructor(private httpClient: HttpClient) {}

  getAllByCustomerId(
    customerId: number
  ): Observable<ListResponseModel<CreditCard>> {
    return this.httpClient.get<ListResponseModel<CreditCard>>(
      this.apiUrl+"creditcards/getallbycustomerid",
      {
        params: {
          customerId: customerId.toString(),
        },
      }
    );
  }

  add(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"creditcards/add",
      creditCard
    );
  }

  delete(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"creditcards/delete",
      creditCard
    );
  }
}
