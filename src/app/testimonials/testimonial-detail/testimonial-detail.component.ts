import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Testimonial} from "../testimonial";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {TestimonialService} from "../testimonial.service";

@Component({
  selector: 'et-testimonial-detail',
  templateUrl: 'testimonial-detail.component.html',
  styleUrls: ['../testimonial.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialDetailComponent implements OnInit, OnDestroy {

  selectedTestimonial: Testimonial;
  private testimonialIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private testimonialService: TestimonialService
  )
  { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.testimonialIndex = params['id'];
        this.selectedTestimonial = this.testimonialService.getTestimonial(this.testimonialIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
