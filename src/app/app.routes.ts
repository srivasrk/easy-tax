import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

import { TESTIMONIAL_ROUTES } from "./testimonials/testimonials.routes";
import { ARTICLE_ROUTES } from "./articles/articles.routes";
import { PRODUCTS_ROUTES } from "./products/product.routes";

import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { ArticlesComponent } from "./articles/articles.component";

const APP_ROUTES: Routes= [
  { path: '', redirectTo: 'et-home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'articles', component: ArticlesComponent, pathMatch: 'full'},
  { path: 'articles', component: ArticlesComponent, children: ARTICLE_ROUTES },
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent, children: PRODUCTS_ROUTES},
  { path: 'testimonials', component: TestimonialsComponent, children: TESTIMONIAL_ROUTES },
  { path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
