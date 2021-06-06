import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  async onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
  selected() {
    this.router.navigate(['']);
  }

}
