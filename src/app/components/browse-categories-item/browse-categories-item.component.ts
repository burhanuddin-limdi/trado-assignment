import { Component, Input } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-browse-categories-item',
  templateUrl: './browse-categories-item.component.html',
  styleUrls: ['./browse-categories-item.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: 'fit-content',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      state(
        'rotate-90',
        style({
          rotate: '90deg',
        })
      ),
      state(
        'rotate-180',
        style({
          rotate: '180deg',
        })
      ),
      transition('rotate-180 => rotate-90', [animate('0s')]),
      transition('rotate-90 => rotate-180', [animate('0s')]),
      transition('open => closed', [animate('0s')]),
      transition('closed => open', [animate('0s')]),
    ]),
  ],
})
export class BrowseCategoriesItemComponent {
  @Input() category?: Category;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
