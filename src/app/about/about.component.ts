import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'et-about',
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {

  smImageUrl: string = '/app/images/saurabhM.jpg';
  rsImageUrl: string = '/app/images/rahulS.jpg';

  constructor() { }

  ngOnInit() {
  }

}
