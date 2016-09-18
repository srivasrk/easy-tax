import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Testimonial } from "../testimonial";

@Component({
  selector: 'et-testimonial-item',
  templateUrl: 'testimonial-item.component.html'
})
export class TestimonialItemComponent {

  @Input('tml-item')testimonial: Testimonial;
  @Input('tml-item-id')testimonialId: number = 0;

  @Output() currentTmlChanged = new EventEmitter<number>();

  constructor() { }

  onTmlClick(){
    this.currentTmlChanged.emit(this.testimonialId);
  }


}
