import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { RedirectComponent } from './redirect';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/common/home' },
  { path: 'home', component: HomeComponent },
  { path: 'redirect', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
