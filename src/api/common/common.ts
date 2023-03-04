import { Injectable } from '@angular/core';
import { HttpService } from 'jabil-bus-lib';
import { environment } from '../../environments/environment';

const baseURL = environment.proxy.gateway;

@Injectable()
export default class CommonHttpService {
  constructor(private http: HttpService) {}

  public getLoginRoleMenuGrant(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/roleMenu/GetLoginRoleMenuGrant',
      method: 'get',
      data,
    });
  }

  public getMenuTree(data?: any) {
    return this.http.request({
      url: baseURL + '/basic/roleMenu/GetMenuTree',
      method: 'get',
      data,
    });
  }

  getInterviewEmployees(data?: any) {
    return this.http.request({
      url: baseURL + '/mfgtranning/api/mfg/Interview/GetInterviewEmployeesAsync',
      method: 'get',
      data,
    });
  }
}
