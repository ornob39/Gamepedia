import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registeredUserData = { email: '', password: '' };
  constructor() {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registeredUserData);
  }

  onSubmit(form: NgForm) {}
}
