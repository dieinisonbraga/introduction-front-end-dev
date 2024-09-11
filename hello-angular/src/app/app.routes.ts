import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details',
  },
];