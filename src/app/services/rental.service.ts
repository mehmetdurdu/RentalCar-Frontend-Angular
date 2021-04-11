import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44323/api/";
  rentalCheckout?: Rental;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      this.apiUrl+"rentals/getall"
    );
  }

  isRentable(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"rentals/rentable",
      rental
    );
  }

  checkFindeksScoreSufficiency(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"rentals/checkfindeksscore",
      rental
    );
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"rentals/add",
      rental
    );
  }
}
