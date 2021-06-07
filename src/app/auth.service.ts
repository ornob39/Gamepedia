import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(
    private http: HttpClient,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  // Registration through POST method(email and password)
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  // Login through POST method(email and password)
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  //User Logout//

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/default']);
  }

  //

  //Snackbar//
  notLogged() {
    if (!!localStorage.getItem('token') == false) {
      this._router.navigate(['/login']);
      this._snackBar.open('Login to Access Website', 'Clear', {
        duration: 3000,
      });
    }
  }
  notLoggedPromt() {
    if (!!localStorage.getItem('token') == false) {
      this._snackBar.open('Login to View More Contents', 'Clear', {
        duration: 3000,
      });
    }
  }

  wrongPassword() {
    if (!!localStorage.getItem('token') == false) {
      this._snackBar.open('Wrong Credentials', 'Clear', {
        duration: 3000,
      });
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
