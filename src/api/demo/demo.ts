import { Injectable } from '@angular/core';
import { HttpService } from 'jabil-bus-lib';

@Injectable()
export default class DemoHttpService {
  constructor(private http: HttpService) {}

  public post(data?: any) {
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'post',
      data,
    });
  }

  public get(data?: any) {
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'get',
      data,
    });
  }

  public delete(id?: any) {
    return this.http.request({
      url: '/demo/demo/demo/delete?id=' + id,
      method: 'delete',
    });
  }

  public put(data?: any) {
    return this.http.request({
      url: '/demo/demo/demo/put',
      method: 'delete',
      data,
    });
  }
}
