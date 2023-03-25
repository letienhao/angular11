import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public _data$ = new BehaviorSubject<any>(null);
  constructor() {}

  sendData(data: string) {
    console.log(data);
    this._data$.next(data);
  }
}
