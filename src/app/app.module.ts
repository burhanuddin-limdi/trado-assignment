import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BrowseCategoriesComponent } from './components/browse-categories/browse-categories.component';
import { HeroSectionProductsComponent } from './components/hero-section-products/hero-section-products.component';
import { HeroSectionRoutesComponent } from './components/hero-section-routes/hero-section-routes.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { BottomProductsSectionComponent } from './components/bottom-products-section/bottom-products-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseCategoriesItemComponent } from './components/browse-categories-item/browse-categories-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    BrowseCategoriesComponent,
    HeroSectionProductsComponent,
    HeroSectionRoutesComponent,
    FeaturesSectionComponent,
    BottomProductsSectionComponent,
    BrowseCategoriesItemComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
