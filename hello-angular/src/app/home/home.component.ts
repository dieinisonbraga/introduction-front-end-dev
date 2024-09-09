import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './../product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productList: Product[] = [];
  productService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then(
      (productList : Product[]) => {
        this.productList = productList;
      });
  }
}
