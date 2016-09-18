import { Component, ViewEncapsulation } from '@angular/core';
// import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'et-root',
  templateUrl: 'app.component.html',
  styleUrls: ['/css/global.css']
  // directives: [ HeaderComponent ]
})
export class AppComponent {
  appBgPhoto : string  = 'https://www.betterment.com/wp-content/uploads/2013/04/piggybank.jpg';
}
