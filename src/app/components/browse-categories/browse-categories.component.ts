import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: 'fit-content',
          opacity: 1,
          display: 'block',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          display: 'none',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class BrowseCategoriesComponent implements OnInit {
  public categories: Category[] = [];
  public isOpen = false;

  constructor(private categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
