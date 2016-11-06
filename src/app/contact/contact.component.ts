import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

declare var google: any;
@Component({
  selector: 'et-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit{
  latitude: number = 25.750813;
  longitude: number = 84.147424;
  zoomLevel = 10;

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

  ngOnInit(){
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
