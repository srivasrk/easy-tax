import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-product',
  templateUrl: 'other-product.component.html'
})
export class OtherProductComponent implements OnInit {
  otherProductImage: string = 'app/images/otherProduct.jpg';

  constructor() { }

  ngOnInit() {
  }

}
