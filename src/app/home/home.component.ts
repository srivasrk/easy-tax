import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';
import { HomeFeaturette } from './home-featurette';
import { HomeService } from "./home.service";
import 'rxjs/Rx';

@Component({
  selector: 'et-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{

  featurettes: HomeFeaturette[] = [];
  carouselImage1: string = 'app/images/carousel1.jpg';
  carouselImage2: string = 'app/images/carousel2.jpg';
  carouselImage3: string = 'app/images/carousel3.jpg';



  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.fetchData();

    this.featurettes = this.homeService.getArticles();
    this.homeService.homeFeaturetteChanged.subscribe(
      (featurettes: HomeFeaturette[]) => {
        this.featurettes = featurettes;
      }
    );
  }


}
