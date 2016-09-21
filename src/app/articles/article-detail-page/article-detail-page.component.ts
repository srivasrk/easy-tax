import {Component, OnInit, OnDestroy, Output, ViewEncapsulation} from '@angular/core';

import {Article} from "../article";
import {Subscription} from "rxjs";

import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from "../articles.service";

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailPageComponent implements OnInit {

  selectedArticle: Article;
  private articleIndex: number = 0;
  private numberOfArticles: number = 0;
  private subscriptionRoute: Subscription;
  private subscriptionSelectedArticle: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private articleService: ArticleService
  )
  { }

  ngOnInit() {
    this.subscriptionRoute = this.route.params.subscribe(
      (params: any) => {
        this.articleIndex = params['id'];
        this.subscriptionSelectedArticle = this.articleService.articlesChanged.subscribe(
          (params: any) => {
            this.selectedArticle = this.articleService.getArticle(this.articleIndex);
            this.numberOfArticles = this.articleService.getNumberOfArticles();
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
    this.subscriptionSelectedArticle.unsubscribe();
  }

  nextArticle() {
    if (this.articleIndex >= this.numberOfArticles - 1) {
      this.articleIndex = 0;
    }
    else{
      this.articleIndex++;
    }
    this.selectedArticle = this.articleService.getArticle(this.articleIndex);
  }

  previousArticle() {
    if (this.articleIndex <= 0) {
      this.articleIndex = this.numberOfArticles - 1;
    }
    else{
      this.articleIndex--;
    }
    this.selectedArticle = this.articleService.getArticle(this.articleIndex);
  }
}
