import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
