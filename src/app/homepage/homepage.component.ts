import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, public _authService: AuthService) {}

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

  //Best of the year
  slides_best = [
    { image: '../../assets/Homepage/Slides/best/1.png' },
    { image: '../../assets/Homepage/Slides/best/2.jpg' },
    { image: '../../assets/Homepage/Slides/best/3.jpg' },
    { image: '../../assets/Homepage/Slides/best/4.jpg' },
    { image: '../../assets/Homepage/Slides/best/5.png' },
  ];

  best_titles = [
    'cyberpunk-2077',
    'biomutant',
    'hitman-3',
    'far-cry-6',
    'ghostwire-tokio',
  ];

  slides_10 = [
    { image: '../../assets/Homepage/Slides/top10/1.jpg' },
    { image: '../../assets/Homepage/Slides/top10/2.jpg' },
    { image: '../../assets/Homepage/Slides/top10/3.jpg' },
    { image: '../../assets/Homepage/Slides/top10/4.jpg' },
    { image: '../../assets/Homepage/Slides/top10/5.jpg' },
    { image: '../../assets/Homepage/Slides/top10/6.jpg' },
    { image: '../../assets/Homepage/Slides/top10/7.jpg' },
    { image: '../../assets/Homepage/Slides/top10/8.jpg' },
    { image: '../../assets/Homepage/Slides/top10/9.jpg' },
    { image: '../../assets/Homepage/Slides/top10/10.jpg' },
  ];
  top10_titles = [
    'the-witcher-3-wild-hunt',
    'the-last-of-us',
    'the-legend-of-zelda-breath-of-the-wild',
    'red-dead-redemption-2',
    'god-of-war-2',
    'uncharted-4-a-thiefs-end',
    'half-life-2',
    'grand-theft-auto-v',
    'mafia-the-city-of-lost-heaven',
    'dark-souls-iii',
  ];

  //Navigate to details
  async openGameDetails(id: string): Promise<void> {
    this.router.navigate(['details', id]);
    console.log('clicked');
  }
}
