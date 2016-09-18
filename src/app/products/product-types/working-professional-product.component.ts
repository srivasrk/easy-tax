import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-professional-product',
  templateUrl: 'working-professional-product.component.html'
})
export class WorkingProfessionalProductComponent implements OnInit {

  workingProfessionalImage: string = 'app/images/workingProfessionalProduct.jpg';

  constructor() { }

  ngOnInit() {
  }

}
