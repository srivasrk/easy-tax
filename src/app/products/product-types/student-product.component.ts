import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-product',
  templateUrl: 'student-product.component.html'
})
export class StudentProductComponent implements OnInit {

  studentProductImage: string = 'app/images/studentProduct.jpg';

  constructor() { }

  ngOnInit() {
  }

}
