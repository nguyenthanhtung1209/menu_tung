import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AdminLayoutComponent
} from '../layout';

const routes: Routes = [
    {
        path: '',component: AdminLayoutComponent,data: {title: 'Trang chủ'},
        children: [
            { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
            { path: '**', redirectTo: 'users' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }