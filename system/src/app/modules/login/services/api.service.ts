import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@enviroment/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  baseUrl : string;
  headers: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_BASE + 'login/checklogin';
    this.headers = 'Content-Type', 'application/json';
  }

  public checklogin(username: string, password: string) {
    return this.http.post<any>(this.baseUrl, { username: username, password: password })
        .map(data => {
            return data;
        });
  }

}
