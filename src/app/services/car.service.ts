import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44323/api/";

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl+"cars/getall"
    );
  }

  getCarsDetailsByCar(
    carId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl+"cars/getcardetails?carıd="+carId
    );
  }

  getCarById(carId: number): Observable<SingleResponseModel<Car>> {
    return this.httpClient.get<SingleResponseModel<Car>>(
      this.apiUrl+"cars/getbyid?carId="+carId
      
    );
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl+"cars/getcardetails"
      
    );
  }

  getCarDetailsByBrand(
    brandName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl+"cars/getcardetailsbybrandname?brandname="+brandName
      
    );
  }

  getCarDetailsByColor(
    colorName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl+"cars/getcardetailsbycolorname?colorname="+colorName
    );
  }
  getCarDetailsByBrandNameAndColorName(
    brandName: string,
    colorName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl+"cars/getcardetailsbybrandnameandcolorname?brandName= & colorName="+colorName+brandName
    );
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"cars/add",
      car
    );
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"cars/update",
      car
    );
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"cars/delete",
      car
    );
  }
}

