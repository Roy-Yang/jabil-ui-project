import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AccountHttpService from 'src/api/common/account';

@Component({
  selector: 'app-redirect',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class RedirectComponent implements OnInit {
  currentLanguage: any = 'en';
  loading: boolean = false;
  userInfo: any = {};

  constructor(private translate: TranslateService, private http: AccountHttpService) {}

  public async ngOnInit() {
    this.currentLanguage = localStorage.getItem('lang');
    this.translate.use(this.currentLanguage);
    this.getData();
  }

  async getData() {
    const { data } = await this.http.getUserInfo();
    this.userInfo = data;
  }
}
