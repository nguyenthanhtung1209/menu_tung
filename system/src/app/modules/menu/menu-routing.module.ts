import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../menu/components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent, data: { title: 'Quản trị menu'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
