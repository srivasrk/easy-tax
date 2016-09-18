import {Component, OnInit } from '@angular/core';
import { Testimonial } from "../testimonial";

import { TestimonialService } from "../testimonial.service";

@Component({
  selector: 'et-testimonials-list',
  templateUrl: 'testimonials-list.component.html'
})

export class TestimonialsListComponent implements OnInit {
  testimonials: Testimonial[] = [];
  activeTmlId: number = 0;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonials();
    this.testimonialService.testimonialsChanged.subscribe(
      (testimonials: Testimonial[]) => this.testimonials = testimonials
    );
  }

  previousTestimonial(){
    if (this.activeTmlId == 0){
      this.activeTmlId = this.testimonials.length - 1;//circle back to the last testimonial

    }
    else if (this.activeTmlId > 0) {
      this.activeTmlId = this.activeTmlId - 1;
    }
  }

  nextTestimonial(){
    if (this.activeTmlId == this.testimonials.length - 1){
      this.activeTmlId = 0;//circle back to the first testimonial

    }
    else if (this.activeTmlId < this.testimonials.length - 1) {
      this.activeTmlId = this.activeTmlId + 1;
    }
  }

  activeTmlIdChanged(tmlId: number){
    if (tmlId != null) {
      this.activeTmlId = tmlId;
      this.nextTestimonial();//to already increment the activeTmlId once because the click event is triggered after the
                              // activeTmlId has been accessed by the html
    }
  }
}
