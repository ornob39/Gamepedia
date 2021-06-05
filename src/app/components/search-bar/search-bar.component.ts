import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
  async onPress() {
    this.router.navigate(['']);
  }
  async userLogin() {
    this.router.navigate(['/login']);
  }
  async userRegister() {
    this.router.navigate(['/register']);
  }
}
