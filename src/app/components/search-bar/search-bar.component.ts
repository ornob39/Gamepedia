import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

   onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
   onPress() {
    this.router.navigate(['']);
  }
   userLogin() {
    this.router.navigate(['/login']);
  }
   userRegister() {
    this.router.navigate(['/register']);
  }
}
