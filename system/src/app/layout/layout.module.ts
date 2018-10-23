import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { devextremeModule } from '../shared/library/devextreme/load.module';
import { ChangepasswordService } from './services/changepassword.service';
import { Changpass } from './models/changpass';
import { HttpModule } from '@angular/http';

import {AdminLayoutComponent} from '../layout';
const APP_CONTAINERS = [AdminLayoutComponent];
import {AppBreadcrumbsComponent,AppFooterComponent,AppHeaderComponent,APP_SIDEBAR_NAV} from './components';
const APP_COMPONENTS = [AppBreadcrumbsComponent,AppFooterComponent,AppHeaderComponent,APP_SIDEBAR_NAV]
// Import directives
import {AsideToggleDirective,NAV_DROPDOWN_DIRECTIVES,ReplaceDirective,SIDEBAR_TOGGLE_DIRECTIVES} from './directives';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
const APP_DIRECTIVES = [AsideToggleDirective,NAV_DROPDOWN_DIRECTIVES,ReplaceDirective,SIDEBAR_TOGGLE_DIRECTIVES]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    devextremeModule,
    HttpModule
  ],
  declarations: [
    AdminLayoutComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ChangePasswordComponent,
  ],
  entryComponents: [ChangePasswordComponent],
  providers: [ChangepasswordService,Changpass],
  exports: []
})
export class LayoutModule {
  constructor( @Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error(
        'LayoutModule is already loaded. Import it in the AppModule only');
    }
  }
}
