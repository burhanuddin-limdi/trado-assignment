import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css'],
})
export class FeaturesSectionComponent {
  public features = [
    {
      title: 'Free Delivery',
      description: 'Free shipping on all order',
      icon: 'fa-solid fa-truck-fast',
    },
    {
      title: 'Online Support 24/7',
      description: 'Support online 24 hours a day',
      icon: 'fa-solid fa-headset',
    },
    {
      title: 'Money Return',
      description: 'Back guarantee under 7 days',
      icon: 'fa-solid fa-wallet',
    },
    {
      title: 'Member Discount',
      description: 'On every order over $120.00',
      icon: 'fa-solid fa-tags',
    },
  ];
}
