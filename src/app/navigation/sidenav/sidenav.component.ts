import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(
    public _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onClose() {
    this.closeSidenav.emit();
  }
  onLogout() {
    this._snackBar.open('Logged Out', 'Clear', { duration: 3000 });
  }
}
