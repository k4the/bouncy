import { Component } from '@angular/core';
import { slideLeft  } from './slide-left.animation';
import { slideDown  } from './slide-down.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideLeft, slideDown ]
})
export class AppComponent {
  title = 'bouncy';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
