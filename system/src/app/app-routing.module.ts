import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemGuard } from './shared/guard/system.guard';

const routes: Routes = [
   { path: 'system', loadChildren: './modules/system.module#SystemModule', canActivate: [SystemGuard]}
  ,{ path: 'login', loadChildren: './modules/login/login.module#LoginModule'}
  ,{ path: '**',  redirectTo: 'system' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    enableTracing: false
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}