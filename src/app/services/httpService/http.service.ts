import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  fundooUrl = environment.baseurl;
  constructor(private httpclient: HttpClient) { }

  Post(url: string, data: any, options: any) {
    return this.httpclient.post(this.fundooUrl + url, data, options);
  }

  Get(url: string, options: any) {
    return this.httpclient.get(this.fundooUrl + url, options);
  }
}
