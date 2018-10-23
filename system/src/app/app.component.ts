import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {lang_vn} from '../assets/i18n/vn';
import { locale, loadMessages } from 'devextreme/localization';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { 
    loadMessages(lang_vn);
    locale('vn');
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
