import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateData } from 'src/core/common/translate-data';
import { MessageService } from 'primeng/api';
import { CommonService, AppMenuService, LocalStorage } from 'jabil-bus-lib';
import AccountHttpService from '../api/common/account';
import CommonHttpService from '../api/common/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalStorage, CommonService, AppMenuService, MessageService],
})
export class AppComponent implements OnInit {
  isLogin!: boolean;
  isRedirect: boolean = false;
  showLayout: boolean = false;

  menuTreeKeys: any = {};
  menuTree: any = {};

  constructor(
    public route: ActivatedRoute,
    private commonFunction: CommonService,
    public messageService: MessageService,
    private translate: TranslateService,
    public http: AccountHttpService,
    private commonHttpService: CommonHttpService,
    private appMenuService: AppMenuService,
    private router: Router,
  ) {}

  public async ngOnInit() {
    this.commonFunction.translateData(TranslateData, this.translate);

    if (window.location.toString().indexOf('/common/redirect?code=') >= 0) {
      localStorage.setItem('loginCheck', '0');
      this.isRedirect = true;
      this.checkOKTALogin();
      return;
    }
    let loginCheck = localStorage.getItem('loginCheck');
    this.isLogin = loginCheck === '1';

    if (this.isLogin) {
      this.menuTreeKeys = await this.commonHttpService.getLoginRoleMenuGrant();
      this.menuTree = await this.commonHttpService.getMenuTree();
      this.showLayout = true;
    }
  }

  checkOKTALogin() {
    this.route.queryParams.subscribe(async data => {
      let code = data['code'];
      if (code) {
        const { data } = await this.http.getOKTAToken({ code });
        if (data) {
          this.handleLoginSuccess(data);
        } else {
          this.messageService.add({ severity: 'error', summary: 'OKTA Login Fail' });
          this.isRedirect = false;
        }
      }
    });
  }

  async handleLoginSuccess(data: any) {
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('loginCheck', '1');
    localStorage.setItem('username', data.userName);
    const menu = await this.appMenuService.getMenuData(this.menuTreeKeys, this.menuTree);
    const url = menu[0]?.items ? menu[0].items[0].routerLink : menu[0].routerLink;
    localStorage.setItem('defaultUrl', url);
    this.isLogin = true;
    this.isRedirect = false;
    this.router.navigate([url]).then(() => {});
  }
}
