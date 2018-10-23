import { Injectable } from '@angular/core';
import { Library } from '../../../shared/library/main';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

export class Menu{
    name: string = '';
    order: number = 1;
}

@Injectable()
export class MenuModel {

    listmenu: any;

    constructor(
        public apiService: MenuService,
        private route: Router,
    ){}

    async getListMenu(async: boolean = false){
        let response = await this.apiService.getAll();
        this.listmenu = response;
        return response;
    }

    saveMenu(data, activeModal){
        Library.showloading();
        this.apiService.update(data).subscribe((response: any) => {
            if(response.success){
                Library.notify(response.message, 'success');
                this.route.navigated = false;
                this.route.navigate([this.route.url]);
                activeModal.hide();
            }else{
                Library.notify(response.message, 'error');
            }
            Library.hideloading();
        });
    }

    deleteMenu(data, MyClass){
        Library.showloading();
        this.apiService.deleteRow(data).subscribe((response: any) => {
            if(response.success){
                Library.notify(response.message,'success');
                MyClass.loadlist();
            }else{
                Library.notify(response.message,'error');
            }
            Library.hideloading();
        });
    }
    
}
