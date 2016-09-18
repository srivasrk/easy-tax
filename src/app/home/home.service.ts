import { Injectable, EventEmitter } from '@angular/core';

import { Headers, Http, Response } from "@angular/http";
import { HomeFeaturette } from "./home-featurette";

@Injectable()
export class HomeService {
  homeFeaturetteChanged = new EventEmitter<HomeFeaturette[]>();

  private homeFeaturettes: HomeFeaturette[] = [];

  constructor(private http: Http) {}

  getArticles() {
    return this.homeFeaturettes;
  }

  getArticle(id: number){
    return this.homeFeaturettes[id];
  }

  storeData() {
    const body = JSON.stringify(this.homeFeaturettes);

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://easy-tax-a8796.firebaseio.com/homeFeaturettes.json', body, {headers: headers});
  }
  fetchData(){
    return this.http.get('https://easy-tax-a8796.firebaseio.com/homeFeaturettes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: HomeFeaturette[]) => {
          this.homeFeaturettes = data;
          this.homeFeaturetteChanged.emit(this.homeFeaturettes);
        }
      );
  }
}
