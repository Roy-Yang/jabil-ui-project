import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AccountHttpService from 'src/api/common/account';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class HomeComponent implements OnInit {
  currentLanguage: any = 'en';
  loading: boolean = false;
  userManualUrl: string = 'https://jabilbus.jblapps.com/servicesbus/assets/pdfs/UserManual.pdf';
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
