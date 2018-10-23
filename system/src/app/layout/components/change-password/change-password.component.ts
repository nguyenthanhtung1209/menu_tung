import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DxFormComponent } from 'devextreme-angular';
import { ChangepasswordService } from '../../services/changepassword.service';
import { Changpass } from '../../models/changpass';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @ViewChild(DxFormComponent) form:DxFormComponent
  password = "";
  passwordOptions: any = {
    mode: "password",
    value: this.password
  };
  passwordComparison = () => {
    return this.form.instance.option("formData").newPass;
  };

  changePassword: any;

  constructor(
    public bsModalRef: BsModalRef,
    public changepassModel: Changpass,
    private changePasswordService: ChangepasswordService,
  ) {}

  ngOnInit() {
    this.changePassword = this.changepassModel.getInfoPassWord();
    console.log(this.changePassword);
  }

  onSubmit(e){
    let idUser = localStorage.getItem('idUser');
    let isLogin = localStorage.getItem('isLogin');
    this.changePassword.isLogin = isLogin;
    this.changePassword.id = idUser;
    this.changepassModel.update(this.changePassword,this.bsModalRef);
    e.preventDefault();
  }

}
