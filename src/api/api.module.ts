import { NgModule } from '@angular/core';
import AccountHttpService from './common/account';
import CommonHttpService from './common/common';
import { HttpService } from 'jabil-bus-lib';

@NgModule({
  declarations: [],
  providers: [
    HttpService,
    AccountHttpService,
    CommonHttpService,
  ],
  entryComponents: [],
  imports: [],
  exports: [],
})
export class ApiModule {
  constructor() {
  }
}
