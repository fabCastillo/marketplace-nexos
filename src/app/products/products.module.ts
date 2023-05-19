import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkeletonComponent } from './pages/skeleton/skeleton.component';
import { SearchComponent } from '../products/components/search/search.component';
import { CarouselComponent } from '../products/components/carousel/carousel.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './pages/menu/menu.component';



@NgModule({
  declarations: [
    SkeletonComponent,
    SearchComponent,
    CarouselComponent,
    NavigationComponent,
    CardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
