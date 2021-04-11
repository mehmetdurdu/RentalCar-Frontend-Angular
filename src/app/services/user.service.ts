import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/userDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44323/api/";


  constructor(private httpClient: HttpClient) {}

  getUserDetailByEmail(
    userMail: string
  ): Observable<SingleResponseModel<UserDetail>> {
    return this.httpClient.get<SingleResponseModel<UserDetail>>(
      this.apiUrl+"users/getuserdetailbymail",
      {
        params: {
          userMail: userMail,
        },
      }
    );
  }

  
}
