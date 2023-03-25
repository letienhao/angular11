import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private shop: ShopService) {}
  sendMessage() {
    this.shop.sendData('cao tung anh');
  }
}
