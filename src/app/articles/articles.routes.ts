import { Routes, RouterModule } from "@angular/router";
import { ArticleDetailPageComponent } from "./article-detail-page/article-detail-page.component";
import { ArticlesComponent } from "./articles.component";
import {ArticleEmptyComponent} from "./article-empty/article-empty.component";

export const ARTICLE_ROUTES: Routes = [
   { path: '', component: ArticlesComponent, children: [
       { path: '', component: ArticleEmptyComponent,  pathMatch: 'full' },
       { path: ':id', component: ArticleDetailPageComponent, pathMatch: 'full' }
  ]}
  //   { path: '', component: ArticlesComponent, pathMatch: 'full' },
  //   { path: ':id', component: ArticleDetailPageComponent}
];

export const articlesRouting = RouterModule.forChild(ARTICLE_ROUTES);