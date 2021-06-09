import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(
    private router: Router,
    public _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
 onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
    console.log('Submitted'+form.value.search)
  }
  onClickSearch(form: NgForm){
    this.router.navigate(['search',form.value.search]);
    console.log('clicked'+form.value.search)
  }

  onLogout() {
    this._snackBar.open('Logged Out', 'Clear', { duration: 3000 });
  }
}
