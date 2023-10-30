import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
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
      transition('open => closed', [animate('0s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
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
