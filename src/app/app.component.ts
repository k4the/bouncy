import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { slideLeft } from './animations/slide-left.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideLeft]
})
export class AppComponent {

  constructor(private location: Location) {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
