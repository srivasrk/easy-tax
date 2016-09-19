import {Component, OnInit } from '@angular/core';
import { Testimonial } from "../testimonial";

import { TestimonialService } from "../testimonial.service";

@Component({
  selector: 'et-testimonials-list',
  templateUrl: 'testimonials-list.component.html'
})

export class TestimonialsListComponent implements OnInit {
  testimonials: Testimonial[] = [];
  nextTmlId: number = 0;
  previousTmlId: number = 0;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonials();
    this.testimonialService.testimonialsChanged.subscribe(
      (testimonials: Testimonial[]) => this.testimonials = testimonials
    );
  }

  //prev/next buttons (div) is shown on basic assumption is that you have minimum of 3 testimonials
  previousTestimonial(){
    if (this.previousTmlId == 0){
      this.previousTmlId = this.testimonials.length - 1;//circle back to the last testimonial
    }
    else if (this.previousTmlId > 0) {
      this.previousTmlId = this.previousTmlId - 1;
    }

    //update the next Tml Id also
    if (this.previousTmlId > this.testimonials.length - 3){
      this.nextTmlId = 0;
    }
    else if (this.previousTmlId > this.testimonials.length - 2){
      this.nextTmlId = 1;
    }
    else {
      this.nextTmlId = this.previousTmlId + 2;
    }
  }

  //prev/next buttons (div) is shown on basic assumption is that you have minimum of 3 testimonials
  nextTestimonial(){
    if (this.nextTmlId == this.testimonials.length - 1){
      this.nextTmlId = 0;//circle back to the first testimonial
    }
    else if (this.nextTmlId < this.testimonials.length - 1) {
      this.nextTmlId = this.nextTmlId + 1;
    }

    //update the previous Tml Id also
    if (this.nextTmlId < 1){
      this.previousTmlId = this.testimonials.length - 2;
    }
    else if (this.nextTmlId < 2){
      this.previousTmlId = this.testimonials.length - 1;
    }
    else {
      this.previousTmlId = this.nextTmlId - 2;
    }
  }

  activeTmlIdChanged(tmlId: number){
    if (tmlId != null) {
      this.previousTmlId = tmlId;
      this.nextTmlId = tmlId;
      this.nextTestimonial();//to already increment the activeTmlId once because the click event is triggered after the
                              // activeTmlId has been accessed by the html
    }
  }
}
