import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registeredUserData = { email: '', password: '' };

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registeredUserData).subscribe(
      (res) => {

        localStorage.setItem('token', res.token);
        this._snackBar.open('Signup Successful!', 'Clear', { duration: 3000 });
        this._router.navigate(['/home']);
      },
      (err) => console.log(err)
    );
  }

  onSubmit(form: NgForm) {}
}
