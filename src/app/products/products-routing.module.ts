import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonComponent } from './pages/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      { path: '', component: SkeletonComponent }
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
