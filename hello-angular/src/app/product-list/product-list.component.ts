import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productList: Product[] = [];
  productService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then(
      (productList : Product[]) => {
        this.productList = productList;
      });
  }

}
