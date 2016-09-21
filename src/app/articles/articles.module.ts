import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ArticlesComponent } from './articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './articles-list/article-item/article-item.component';
import { ArticleService } from "./articles.service";
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleSearchPipe } from "./article-pipe";
import { ArticlesSideBarComponent } from './articles-side-bar/articles-side-bar.component';
import { ArticleDetailPageComponent } from './article-detail-page/article-detail-page.component';
import { articlesRouting } from "./articles.routes";

@NgModule({
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticleItemComponent,
        ArticleDetailComponent,
        ArticleSearchPipe,
        ArticlesSideBarComponent,
        ArticleDetailPageComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        articlesRouting
    ],
    providers: [
        ArticleService
    ],
})

export default class ArticlesModule {}