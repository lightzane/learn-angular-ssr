import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn]
})
export class AppComponent {

  // https://github.com/lightzane/learn-angular-route-animations
  prepareOutlet(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }

}
