import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputLoginComponent implements OnInit {

   userName : string = '';
   passWord : string = '';
  //  hiddeShowPassword$ :
  constructor(private router: Router) {
    // ...
  }
  ngOnInit(): void {

  }
  handleLogin(){
    if((this.userName.trim() || this.passWord.trim()) === ''){
      return false
    }
    this.router.navigate(['/home'])
    return true
  }
}
