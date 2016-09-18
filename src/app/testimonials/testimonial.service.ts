import { Injectable, EventEmitter } from '@angular/core';

import { Testimonial } from "./testimonial";
import { Headers, Http, Response } from "@angular/http";

@Injectable()
export class TestimonialService {
  testimonialsChanged = new EventEmitter<Testimonial[]>();

  private testimonials: Testimonial[] = [];

  constructor(private http: Http) {}

  getTestimonials() {
    return this.testimonials;
  }

  getTestimonial(id: number){
    return this.testimonials[id];
  }

  storeData() {
    const body = JSON.stringify(this.testimonials);

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://easy-tax-a8796.firebaseio.com/testimonials.json', body, {headers: headers});
  }

  fetchData(){
    return this.http.get('https://easy-tax-a8796.firebaseio.com/testimonials.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Testimonial[]) => {
          this.testimonials = data;
          this.testimonialsChanged.emit(this.testimonials);
        }
      );
  }
}
