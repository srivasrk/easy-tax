import { Injectable, EventEmitter } from '@angular/core';

import { Headers, Http, Response } from "@angular/http";
import { Article } from "./article";

@Injectable()
export class ArticleService {
  articlesChanged = new EventEmitter<Article[]>();

  private articles: Article[] = [];

  constructor(private http: Http) {}

  getArticles() {
    return this.articles;
  }

  getArticle(id: number){
    if (id < 0){
      return null;
    }
    return this.articles[id];

  }

  storeData() {
    const body = JSON.stringify(this.articles);

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://easy-tax-a8796.firebaseio.com/articles.json', body, {headers: headers});
  }
  fetchData(){
    return this.http.get('https://easy-tax-a8796.firebaseio.com/articles.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Article[]) => {
          this.articles = data;
          for (let art of this.articles){
            art.contentPreview = art.content.slice(0, 250);
            art.contentPreview = art.contentPreview + ' ...';
          }
          this.articlesChanged.emit(this.articles);
        }
      );
  }
}
