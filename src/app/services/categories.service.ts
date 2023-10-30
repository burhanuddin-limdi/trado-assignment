import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Category[] {
    return [
      {
        name: 'Cell phones',
        products: ['iPhone', 'Samsung', 'Xiaomi', 'Huawei'],
      },
      {
        name: 'Computers & Accessories',
        products: ['Laptops', 'Desktop', 'Tablets', 'Monitors', 'Headphones'],
      },
      { name: 'Television & Video', products: ['TV', 'Camera', 'Video Games'] },
      {
        name: 'Smartwatches',
        products: ['Apple', 'Samsung', 'Xiaomi', 'Huawei'],
      },
      { name: 'Camera & Headphones', products: ['Nikon', 'Canon', 'Fujima'] },
      { name: 'Video Games', products: ['Playstation', 'Xbox', 'Nintendo'] },
      {
        name: 'Sports & Outdoors',
        products: ['Cricket', 'Hockey', 'Football', 'Golf'],
      },
    ];
  }
}
