import  {Component, Input, ViewEncapsulation} from '@angular/core';
import { Article } from "../article";

@Component({
  selector: 'app-articles-list',
  templateUrl: 'articles-list.component.html',
  styleUrls: ['articles-list.component.css']
})

export class ArticlesListComponent {

  @Input() articles: Article[] = [];
  constructor() { }

}
