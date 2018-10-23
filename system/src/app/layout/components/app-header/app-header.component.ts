import { Component } from '@angular/core';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  providers: [BsModalService]
})
export class AppHeaderComponent { 
  class_header :any;
  system: boolean = false;
  banner_first: any;
  banner_second: any;

  constructor(
    private modalService: BsModalService,
  ){
    let layout = localStorage.getItem('layout');
    if(layout == 'system'){
      this.banner_first = "CÔNG TY CỔ PHẦN CÔNG NGHỆ TIN HỌC EFY VIỆT NAM";
      this.banner_second = "HỆ THỐNG QUẢN TRỊ NGƯỜI DÙNG";
      this.system = true;
      this.class_header = 'app-header-system';
    }else{
      this.banner_first = "ỦY BAN NHÂN DÂN THÀNH PHỐ SÔNG CÔNG";
      this.banner_second = "PHẦN MỀM QUẢN LÝ HỘ TỊCH";
      this.class_header = 'app-header-backend';
    }
  }

  changePassword(){
    this.modalService.show(ChangePasswordComponent, {class: 'modal-lg'});
  }
}
