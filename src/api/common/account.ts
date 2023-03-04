import { Injectable } from '@angular/core';
import { HttpService } from 'jabil-bus-lib';
import { environment } from '../../environments/environment';

const baseURL = environment.proxy.gateway;

@Injectable()
export default class AccountHttpService {
  constructor(private http: HttpService) {}

  public login(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/accounts/login',
      method: 'post',
      data,
    });
  }

  public getOKTAUrl(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/okta/GetAuthorizeUrl',
      method: 'post',
      data,
    });
  }

  public getOKTAToken(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/okta/GetAccessToken',
      method: 'post',
      data,
    });
  }

  public getUserInfo(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/accounts/userinfo',
      method: 'post',
      data,
    });
  }
}
