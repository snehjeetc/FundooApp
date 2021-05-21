import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  fundooUrl = environment.baseurl;
  constructor(private httpclient: HttpClient) { }

  Post(url: string, data: any) {
    return this.httpclient.post(this.fundooUrl + url, data);
  }
}
