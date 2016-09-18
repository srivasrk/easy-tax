import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CommonModule, FORM_PROVIDERS } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule, REACTIVE_FORM_DIRECTIVES, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routing } from "./app.routes";
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsStartComponent } from './testimonials/testimonials-start.component';
import { TestimonialItemComponent } from './testimonials/testimonials-list/testimonial-item.component';
import { TestimonialsListComponent } from './testimonials/testimonials-list/testimonials-list.component';
import { TestimonialService } from "./testimonials/testimonial.service";
import { HttpModule } from "@angular/http";
import { TestimonialDetailComponent } from './testimonials/testimonial-detail/testimonial-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SmallBusinessProductComponent } from './products/product-types/small-business-product.component';
import { OtherProductComponent } from './products/product-types/other-product.component';
import { WorkingProfessionalProductComponent } from './products/product-types/working-professional-product.component';
import { StudentProductComponent } from './products/product-types/student-product.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleItemComponent } from './articles/articles-list/article-item/article-item.component';
import { ArticleService } from "./articles/articles.service";
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleSearchPipe } from "./articles/article-pipe";
import { HomeService } from "./home/home.service";
import { ArticlesSideBarComponent } from './articles/articles-side-bar/articles-side-bar.component';
import { ArticleDetailPageComponent } from './articles/article-detail-page/article-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestimonialsComponent,
    TestimonialsStartComponent,
    TestimonialsListComponent,
    TestimonialItemComponent,
    TestimonialDetailComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    StudentProductComponent,
    WorkingProfessionalProductComponent,
    SmallBusinessProductComponent,
    OtherProductComponent,
    SmallBusinessProductComponent,
    OtherProductComponent,
    WorkingProfessionalProductComponent,
    StudentProductComponent,
    FooterComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    ArticleSearchPipe,
    ArticlesSideBarComponent,
    ArticleDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [TestimonialService, ArticleService, HomeService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
