import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-business-product',
  templateUrl: 'small-business-product.component.html'
})
export class SmallBusinessProductComponent implements OnInit {

  smallBusinessProductImage: string = '../../../../app/images/smallBusinessProduct.jpg';

  constructor() { }

  ngOnInit() {
  }

}
