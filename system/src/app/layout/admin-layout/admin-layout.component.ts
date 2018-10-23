import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent { 
  checkLogin: boolean = true;
  constructor() {
    // check login
    if (localStorage.getItem('isLogin') == 'system') {
      this.checkLogin = true;
    }
  }
}
