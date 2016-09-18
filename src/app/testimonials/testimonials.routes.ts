import { Routes } from "@angular/router";
import { TestimonialsStartComponent } from "./testimonials-start.component";
import { TestimonialDetailComponent } from "./testimonial-detail/testimonial-detail.component";

export const TESTIMONIAL_ROUTES: Routes = [
  { path: '', component: TestimonialsStartComponent },
  { path: ':id', component: TestimonialDetailComponent }
];
