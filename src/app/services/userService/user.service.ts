import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  loginToFundoo(data: any) {
    return this.httpservice.Post('user/login', data);
  }

  registerUser(data: any) {
    return this.httpservice.Post('user/userSignUp', data);
  }
}
