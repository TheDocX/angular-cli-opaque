import { Component } from '@angular/core';
import {WindowRef} from 'angular-cli-opaque-window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public constructor(private _window:WindowRef) {
    console.info('window:', _window);
  }
}
