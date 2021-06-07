import { Component, OnInit } from '@angular/core';
import {
  MatCarousel,
  MatCarouselComponent,
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //New Released
  slides = [
    { image: '../../assets/Homepage/Slides/new/new1.jpg' },
    { image: '../../assets/Homepage/Slides/new/new2.jpg' },
    { image: '../../assets/Homepage/Slides/new/new3.jpg' },
    { image: '../../assets/Homepage/Slides/new/new4jpg.jpg' },
    { image: '../../assets/Homepage/Slides/new/new5.jpg' },
  ];
  //Best of the year
  slides_best = [
    { image: '../../assets/Homepage/Slides/best/1.png' },
    { image: '../../assets/Homepage/Slides/best/2.jpg' },
    { image: '../../assets/Homepage/Slides/best/3.jpg' },
    { image: '../../assets/Homepage/Slides/best/4.jpg' },
    { image: '../../assets/Homepage/Slides/best/5.png' },
  ];
}
