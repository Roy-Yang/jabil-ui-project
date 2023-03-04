import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMenuService } from 'jabil-bus-lib';
import { MessageService } from 'primeng/api';
import AccountHttpService from 'src/api/common/account';
import CommonHttpService from 'src/api/common/common';
import { TranslateData } from 'src/core/common/translate-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  currentRegion: string = '';
  rememberPwd = false;
  pwdType = 'password';
  currTab = 0;
  language = [
    {
      label: 'English',
      icon: 'usa',
      command: (event: any) => {
        localStorage.setItem('lang', 'en');
        window.location.reload();
      },
    },
    {
      label: '中文',
      icon: 'cn',
      command: (event: any) => {
        localStorage.setItem('lang', 'zh');
        window.location.reload();
      },
    },
  ];
  constructor(
    public http: AccountHttpService,
    private router: Router,
    private messageService: MessageService,
    private appMenuService: AppMenuService,
    private commonHttpService: CommonHttpService,
  ) {}

  public async ngOnInit() {
    if (localStorage.getItem('rememberPwd') === '1') {
      this.rememberPwd = true;
      try {
        this.username = window.atob(localStorage.getItem('usernameText') || '');
        this.password = window.atob(localStorage.getItem('password') || '');
      } catch (e) {
        this.rememberPwd = false;
        this.savePwd();
      }
    }
  }

  winLogin(event: any) {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  async oktaLogin() {
    const { data } = await this.http.getOKTAUrl();

    if (data.url !== '') {
      window.location.href = data.url;
    }
  }

  async login() {
    if (this.username && this.password) {
      let formData = {
        name: this.username,
        password: this.password,
      };
      let res: any = await this.http.login(formData);

      if (res.code !== 0 || res.error) {
        this.oktaLogin();
        return;
      }
      this.savePwd();
      this.handleLoginSuccess(res.data);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: TranslateData.psdNameInvalid,
      });
    }
  }

  async handleLoginSuccess(data: any) {
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('roles', data.roles);
    localStorage.setItem('loginCheck', '1');
    localStorage.setItem('username', data.name);

    const menuTreeKeys = await this.commonHttpService.getLoginRoleMenuGrant();
    const menuTree = await this.commonHttpService.getMenuTree();

    const menu = await this.appMenuService.getMenuData(menuTreeKeys, menuTree);
    const url = menu[0].items ? menu[0].items[0].routerLink : menu[0].routerLink;
    localStorage.setItem('defaultUrl', url);
    this.router.navigate([url]).then(() => {
      window.location.reload();
    });
  }

  savePwd() {
    if (this.rememberPwd) {
      localStorage.setItem('rememberPwd', '1');
      localStorage.setItem('usernameText', window.btoa(this.username));
      localStorage.setItem('password', window.btoa(this.password));
    } else {
      localStorage.setItem('rememberPwd', '0');
      localStorage.setItem('usernameText', '');
      localStorage.setItem('password', '');
    }
  }
}
