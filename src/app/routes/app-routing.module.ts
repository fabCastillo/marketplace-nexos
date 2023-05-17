import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '../products/pages/skeleton/skeleton.component';



const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('../products/products.module').then(m=> m.ProductsModule)
  },
  {
    path: '**',
    component: SkeletonComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
