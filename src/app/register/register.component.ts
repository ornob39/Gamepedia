import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registeredUserData = { email: '', password: '' };

  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registeredUserData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onSubmit(form: NgForm) {}
}
