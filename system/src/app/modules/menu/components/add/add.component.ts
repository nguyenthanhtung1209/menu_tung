import { Component, OnInit } from '@angular/core';
import { MenuModel, Menu } from '../../models/menu-model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  menu: Menu;

  constructor(
    public menuModel: MenuModel,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
    this.menu = new Menu();
    this.menu.order = this.menuModel.listmenu.length + 1;
  }

  onSubmit(e){
    this.menuModel.saveMenu(this.menu, this.bsModalRef);
  }

}
