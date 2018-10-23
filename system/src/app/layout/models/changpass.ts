import { Injectable } from '@angular/core';
import { ChangepasswordService } from '../services/changepassword.service';
import { Library } from '../../shared/library/main';
import { Router } from '@angular/router';

export class infoChangePass{
    currentPass: string = '';
    newPass: string = '';
    rePass: string = '';
}
@Injectable()
export class Changpass {

    infoPass: infoChangePass;

    constructor(private changePasswordApi: ChangepasswordService
        , private router: Router
    ) {
    }

    update(data,activeModal){
        this.changePasswordApi.updatePassWord(data).subscribe((response: any) => {
            if(response.success){
                Library.notify(response.message,'success');
                activeModal.hide();
            }else{
                Library.notify(response.message,'error');
            }
        });
    }

    getInfoPassWord(){
        this.infoPass = new infoChangePass;
        return this.infoPass;
    }
}
