import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { devextremeModule } from '../../shared/library/devextreme/load.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { IndexComponent } from './components/index/index.component';

import { MenuService } from '../menu/services/menu.service';
import { MenuModel } from '../menu/models/menu-model';
import { AddComponent } from './components/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    HttpModule,
    devextremeModule,
    ModalModule.forRoot(),
    FormsModule,
    
  ],
  providers: [MenuService, MenuModel],
  declarations: [IndexComponent, AddComponent],
  entryComponents: [AddComponent]
})
export class MenuModule { }
