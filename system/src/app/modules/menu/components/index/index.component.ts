import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menu-model';
import { Library } from 'app/shared/library/main';
import { MenuService } from '../../services/menu.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddComponent } from '../add/add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  listmenu: any;
  lookupData: any;
  bsModalRef: BsModalRef;
  selectedRowKeys: any = [];

  constructor(
    private menuModel: MenuModel,
    private ApiService: MenuService,
    private modalService: BsModalService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.loadlist();
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  async loadlist(){
    Library.showloading();
    this.listmenu = await this.menuModel.getListMenu();
    this.lookupData = {
      store: {
        type: "array",
        data: this.listmenu,
        sort: "name"
      }
    };
    Library.hideloading();
  }

  update(e){
    let param = e.data;
    param.id = e.key;
    this.ApiService.insertRow(param).subscribe((response: any) => {
      if(response.success){
        Library.notify(response.message,'success');
        this.loadlist();
      }else{
        Library.notify('Có lỗi xảy ra','error');
      }
      Library.hideloading();
    });
  }

  insert(e){
    let param = e.data;
    Library.showloading();
    this.ApiService.insertRow(param).subscribe((response: any) => {
      if(response.success){
        Library.notify(response.message,'success');
        this.loadlist();
      }else{
        Library.notify('Có lỗi xảy ra','error');
      }
      Library.hideloading();
    });
  }

  add(){
    this.modalService.show(AddComponent, {class: 'modal-lg'});
  }

  selectMenu(e){
    this.selectedRowKeys = e.selectedRowsData
  }
  
  deletes(e){
    let Myclass = this;
    let selectedItems = this.selectedRowKeys;
    let id = '';
    let data = {
      id: ""
    };
    var result = Library.confirm("Bạn có chắc chắn muốn xóa đối tượng đã chọn?", "Thông báo");
    if (result) {
      result.done(function (dialogResult) {
        if (dialogResult) {
          selectedItems.forEach((item) => {
            id += item.id + ',';
          });
          data.id = id;
          Myclass.menuModel.deleteMenu(data,Myclass);
        }
      });
    }
  }

}
