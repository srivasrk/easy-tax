import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TestimonialService } from "./testimonial.service";

@Component({
  selector: 'et-testimonials-start',
  template: `
    <h2>
      Please select a testimonial!
    </h2>
    
    <div>
      <a class="btn btn-success" type="button" (click)="onStoreClick()">Store to database</a>
      <a class="btn btn-success" type="button" (click)="onFetchClick()">Get from database</a>
    </div>
  `,
  styleUrls: ['../../app/css/global.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsStartComponent implements OnInit{

  constructor(private testimonialService: TestimonialService){}

  ngOnInit() {
    this.onFetchClick();
  }

  onStoreClick() {
    this.testimonialService.storeData().subscribe(
      data => console.log(data)
    );
  }

  onFetchClick() {
    this.testimonialService.fetchData();
  }

}
