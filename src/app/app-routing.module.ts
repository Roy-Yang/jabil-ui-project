import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultRouteGuardService } from 'jabil-bus-lib';

const routes: Routes = [
  // todo 404 page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/common/home',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-routing.module').then(m => m.LoginRoutingModule),
  },
  // default page
  {
    path: 'common',
    canActivate: [DefaultRouteGuardService],
    loadChildren: () => import('./pages/common/common.module').then(m => m.CommonPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
