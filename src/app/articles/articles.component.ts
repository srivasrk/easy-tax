import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Article } from "./article";
import { ArticleService } from "./articles.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: 'articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  articleDetail: Article;
  private articleId: number = -1;
  private subscription: Subscription;
  testBool: boolean = true;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute,) { }



  ngOnInit() {
    this.articleService.fetchData();

    this.articles = this.articleService.getArticles();
    this.articleService.articlesChanged.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.testBool = true;

        this.articleId = params['id'];
        this.articleDetail = this.articleService.getArticle(this.articleId);
        if (this.articleDetail = null){
          this.testBool = false;
        }
      }
    );
  }

}
