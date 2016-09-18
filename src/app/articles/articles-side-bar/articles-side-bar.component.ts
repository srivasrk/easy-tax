import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Article } from "../article";
// import { ArticleDetailComponent } from "../article-detail/article-detail.component";

@Component({
  selector: 'app-articles-side-bar',
  templateUrl: './articles-side-bar.component.html',
  // directives: [ ArticleDetailComponent],
  styleUrls: ['./articles-side-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesSideBarComponent implements OnInit {

  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {
  }

}
