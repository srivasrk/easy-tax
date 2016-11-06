import { Component } from '@angular/core';

@Component({
  selector: 'et-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],



})
export class HeaderComponent {
  easyTaxLogoUrl: string = 'app/images/easyTaxLogo.jpg';
  isCollapsed: boolean = true;

  constructor() {}

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }
}
