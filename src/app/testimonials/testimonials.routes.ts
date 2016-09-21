import { Routes, RouterModule } from "@angular/router";
import { TestimonialsStartComponent } from "./testimonials-start.component";
import { TestimonialDetailComponent } from "./testimonial-detail/testimonial-detail.component";
import { TestimonialsComponent } from "./testimonials.component";

export const TESTIMONIAL_ROUTES: Routes = [
  { path: '', component: TestimonialsComponent, children: [
    { path: '', component: TestimonialsStartComponent },
    { path: ':id', component: TestimonialDetailComponent }
  ]}
];

export const testimonialsRouting = RouterModule.forChild(TESTIMONIAL_ROUTES);