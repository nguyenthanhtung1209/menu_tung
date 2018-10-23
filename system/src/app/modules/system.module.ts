import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
/* Feature Modules */
import { LayoutModule } from '../layout/layout.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { devextremeModule } from '../shared/library/devextreme/load.module';
// Import routing module
import { SystemRoutingModule } from './system.routing';
import * as $ from 'jquery';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    LayoutModule,
    devextremeModule,
    TabsModule.forRoot()
  ],
  declarations: [],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})
export class SystemModule { 
  constructor(){
    localStorage.setItem('layout', 'system');
  }

}
