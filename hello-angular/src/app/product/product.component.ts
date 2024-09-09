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
  quantity: number = 1;
  statusButton: boolean = true;

  // Função para subtrair o valor da quantidade de um produto
  minus(): void {
    (this.quantity - 1) === 1 ? this.statusButton=true : this.statusButton=false;
    if (this.quantity !== 1) {
      this.quantity-=1;
    }
}

  // Função para somar valor da quantidade de um produto
  plus(): void {
    this.statusButton=false;
    this.quantity++;
  }

  // Função para comprar um produto informando o preço final
  buyProduct():  void {
      if (window.confirm(`Preço final: ${Math.round((this.product.price * this.quantity) * 100) / 100}`)) {
          alert('Produto comprado com sucesso!')
          this.quantity = 1;
      }
  }
}
