import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsStartComponent } from './testimonials-start.component';
import { TestimonialItemComponent } from './testimonials-list/testimonial-item.component';
import { TestimonialsListComponent } from './testimonials-list/testimonials-list.component';
import { TestimonialDetailComponent } from "./testimonial-detail/testimonial-detail.component";
import { TestimonialService } from "./testimonial.service";
import { testimonialsRouting } from "./testimonials.routes";

@NgModule({
    declarations: [
        TestimonialsComponent,
        TestimonialsStartComponent,
        TestimonialsListComponent,
        TestimonialItemComponent,
        TestimonialDetailComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        testimonialsRouting
    ],
    providers: [
        TestimonialService
    ]

})
export default class TestimonialsModule {}