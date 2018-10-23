import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { devextremeModule } from '../../shared/library/devextreme/load.module';
import { LoginRoutingModule } from './login.routing';
import { IndexComponent } from './index/index.component';
import {Service } from './model/user.model';
import {ApiService} from './services/api.service';
import { LogoutComponent } from './logout/logout.component';

/**
 * Module đăng nhập hệ thống.
 *
 * @author Toanph <skype: toanph1505>
 */
@NgModule({
  imports: [
    CommonModule,
    devextremeModule,
    LoginRoutingModule
  ],
  providers: [ Service, ApiService ],
  declarations: [IndexComponent, LogoutComponent]
})
export class LoginModule { }