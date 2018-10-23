import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '@enviroment/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Library } from '../../../shared/library/main';

@Injectable()
export class MenuService {

  baseUrl : string;
  headers: any;

  constructor(private http: Http) { 
    this.baseUrl = environment.API_URL + 'menu/';
    // set headers
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
    headers.append('Authorization', 'bearer ' + token);
    this.headers = headers;
  }

  async getAll(): Promise<any>{
    let options = { headers: this.headers};
      try {
          let response = await this.http
            .get(this.baseUrl + 'getall',options)
            .toPromise();
          return response.json();
        } catch (error) {
          if(error.type == 3){
            Library.notify("Request header field X-XSRF-TOKEN is not allowed by Access-Control-Allow-Headers in preflight response.",'error');
          }else{
            Library.notify(error,'error');
          }
      }
  }

  insertRow(param): Observable<any>{
    let options = { headers: this.headers };
    return this.http.post(this.baseUrl + 'update', param, options)
    .map(res => res.json());
  }

  deleteRow(param): Observable<any>{
    let options = { headers: this.headers };
    return this.http.post(this.baseUrl + 'delete', param, options)
    .map(res => res.json());
  }

  update(data): Observable<any>{
    let options = { headers: this.headers };
    return this.http.post(this.baseUrl + 'updateroot', data, options)
    .map(res => res.json());
  }

}
