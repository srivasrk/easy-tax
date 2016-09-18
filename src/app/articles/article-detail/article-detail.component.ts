import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Article } from "../article";

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }

  @Input() selectedArticle: Article;
  @Input() selectedArticleId: number;
  @Input() displaytext: string = 'Read Article';

  ngOnInit() {
  }

}
