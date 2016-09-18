import { Routes } from "@angular/router";
import { ArticleDetailPageComponent } from "./article-detail-page/article-detail-page.component";
import { ArticlesComponent } from "./articles.component";

export const ARTICLE_ROUTES: Routes = [
  { path: ':id', component: ArticleDetailPageComponent, pathMatch: 'full' }
];
