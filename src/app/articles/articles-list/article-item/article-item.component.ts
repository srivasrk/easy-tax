import { Component, Input } from '@angular/core';
import { Article } from "../../article";
import { ArticleService } from "../../articles.service";

@Component({
  selector: 'app-article-item',
  templateUrl: 'article-item.component.html',
  styleUrls: ['articles-item.component.css']
})
export class ArticleItemComponent {

  @Input('art-item')articleItem: Article;
  @Input('art-item-id')articleId: number;

  // twitterShareUrl: string = 'http://twitter.com/home?status=http://srivasrk.github.io/articles/' + this.articleId;
  // facebookShareUrl: string = 'https://www.facebook.com/sharer/sharer.php?u=http://srivasrk.github.io/articles/' + this.articleId;

  twitterShareUrl: string = 'http://twitter.com/home?status=http://srivasrk.github.io';
  facebookShareUrl: string = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://srivasrk.github.io&p[images][0]=&p[title]=File your taxes&p[summary]=Description%20goes%20here!";

  constructor(private articleService: ArticleService) { }

  getArticleFromId(articleId: number){
    return this.articleService.getArticle(articleId);

  }
}
