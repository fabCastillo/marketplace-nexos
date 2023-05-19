import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonComponent } from './pages/skeleton/skeleton.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      { path: 'prueba', component: NavigationComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
