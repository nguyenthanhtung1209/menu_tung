import { Component, OnInit } from '@angular/core';
import { User, Service } from '../model/user.model';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Library } from '../../../shared/library/main';

@Component({
  selector: 'app-login',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user: Object;
  errorLogin : boolean;
  rules: Object;
  returnUrl: string;

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private router: Router) 
  {
    localStorage.setItem('isLogin', 'false');
      this.user = {'UserName':'','Password' : ''};
      this.rules = {'role':'admin'};
      this.errorLogin = false;
  }

  // Khoi tao
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login = function(e) {
    Library.showloading();
    this.api.checklogin(this.user.UserName, this.user.Password)
    .subscribe(
        data => {
          // check succes
          if(data.code == 200){
            localStorage.setItem('isLogin', 'system');
            localStorage.setItem('idUser', data.data.user_infor.id);
            localStorage.setItem('user_infor', JSON.stringify(data.data.user_infor));
            localStorage.setItem('token', data.data.token);
            let newRoute = "/system/menu";
            this.router.navigate([newRoute]);
          }else{
            this.errorLogin = true;
          }
          Library.hideloading();
        },
        error => {
          Library.hideloading();
          this.errorLogin = true;
        });
    e.preventDefault();
  }
}