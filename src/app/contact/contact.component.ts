import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'et-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;

  typeOfEnquiry = ['Individual', 'Company', 'Other'];

  constructor() {
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'typeOfEnquiry': new FormControl('Individual'),
      'mobileNumber': new FormControl('123', Validators.required)
    });
  }


  onSubmit() {
    console.log(this.contactForm);
  }
}
