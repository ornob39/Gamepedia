import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };

  constructor() {}

  ngOnInit() {}

  loginUser() {
    console.log(this.loginUserData);
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
