import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44323/api/";


  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(Id: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
      this.apiUrl+"carimages/getimagesbycarid?id="+Id
      
    );
  }

  getFileById(Id: number): Observable<string> {
    return this.httpClient.get<string>(
      this.apiUrl+"carimages/getfilebyid?id="+Id
      
    );
  }

  getCarImageUrl(Id: number): string {
    return this.apiUrl+"carimages/getfilebyid?id="+Id;
  }

  add(carId: number, file: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    formData.append('CarId', carId.toString());
    formData.append('Image', file);

    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"carimages/add",
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }

  delete(carImage: CarImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"carimages/delete",
      carImage
    );
  }
}
