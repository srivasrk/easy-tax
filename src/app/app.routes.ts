import { RouterModule, Routes } from '@angular/router';

// import { TESTIMONIAL_ROUTES } from "./testimonials/testimonials.routes";
import { ARTICLE_ROUTES } from "./articles/articles.routes";

// import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ArticlesComponent } from "./articles/articles.component";

const APP_ROUTES: Routes= [
  { path: '', redirectTo: 'et-home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  // { path: 'articles', component: ArticlesComponent},
  // { path: 'articles', component: ArticlesComponent, children: ARTICLE_ROUTES },
  { path: 'contact', component: ContactComponent},
  { path: 'products', loadChildren: "./app/products/products.module"},
  { path: 'testimonials', loadChildren: "./app/testimonials/testimonials.module"},
  { path: 'articles', loadChildren: "./app/articles/articles.module"},
  { path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
