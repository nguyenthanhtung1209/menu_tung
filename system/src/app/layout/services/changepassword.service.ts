import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '@enviroment/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChangepasswordService {

  baseUrl : string;
  headers: any;
  token: string;

  constructor(private http: Http) {
    // set base Url
    this.baseUrl = environment.API_URL + 'users/';
    // set headers
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
    headers.append('Authorization', 'bearer ' + token);
    this.headers = headers;
  }

  updatePassWord(data: any): Observable<any>{
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.baseUrl + 'update_password', data, options)
    .map(res => res.json());
  }

}
