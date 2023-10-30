import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: 'fit-content',
          opacity: 1,
          display: 'block',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
          opacity: 0,
          display: 'none',
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ],
})
export class NavbarComponent {
  public isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
