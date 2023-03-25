import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private shop: ShopService) {}
  mesage: string = '';
  ngOnInit() {
    this.shop._data$.subscribe((data) => {
      this.mesage;
    });
  }
}
