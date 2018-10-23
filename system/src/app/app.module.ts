import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
// Import routing module
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';
import { SystemGuard } from './shared/guard/system.guard';
import { MyHttpInterceptor} from './shared/library/http/httpinterceptor';
import {HttpService} from './shared/library/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [SystemGuard,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }