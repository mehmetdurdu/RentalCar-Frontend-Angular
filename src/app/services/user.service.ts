import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/userDetail';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:44323/api/';

  constructor(private httpClient: HttpClient) {}

  getUserDetailByEmail(
    userMail: string
  ): Observable<SingleResponseModel<UserDetail>> {
    return this.httpClient.get<SingleResponseModel<UserDetail>>(
      this.apiUrl + 'users/getuserdetailbymail',
      {
        params: {
          userMail: userMail,
        },
      }
    );
  }

  getUsers(): Observable<ListResponseModel<UserDetail>> {
    return this.httpClient.get<ListResponseModel<UserDetail>>(
      this.apiUrl + 'users/getall'
    );
  }

  getUserById(userId: number): Observable<SingleResponseModel<UserDetail>> {
    return this.httpClient.get<SingleResponseModel<UserDetail>>(
      this.apiUrl + 'users/getbyid?id=' + userId
    );
  }

  update(user: UserDetail): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'users/update',
      user
    );
  }
}
