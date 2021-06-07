import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Game } from 'src/app/model';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private router: Router,
    public _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  //New Released
  slides = [
    { image: '../../assets/Homepage/Slides/new/new1.jpg' },
    { image: '../../assets/Homepage/Slides/new/new2.jpg' },
    { image: '../../assets/Homepage/Slides/new/new3.jpg' },
    { image: '../../assets/Homepage/Slides/new/new4jpg.jpg' },
    { image: '../../assets/Homepage/Slides/new/new5.jpg' },
  ];
  new_titles = [
    'vampire-the-masquerade-bloodlines-2',
    'outriders',
    'halo-infinite',
    'resident-evil-village',
    'stalker-2',
  ];
  ids = ['vampire-the-masquerade-bloodlines-2'];
  id = 'vampire-the-masquerade-bloodlines-2';
  //Best of the year
  slides_best = [
    { image: '../../assets/Homepage/Slides/best/1.png' },
    { image: '../../assets/Homepage/Slides/best/2.jpg' },
    { image: '../../assets/Homepage/Slides/best/3.jpg' },
    { image: '../../assets/Homepage/Slides/best/4.jpg' },
    { image: '../../assets/Homepage/Slides/best/5.png' },
  ];
  async openGameDetails(id: string): Promise<void> {
    this.router.navigate(['details', id]);
    console.log('clicked');
  }



}
