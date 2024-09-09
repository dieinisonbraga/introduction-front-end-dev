import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://fakestoreapi.com/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    console.log()
    return (await data.json()) ?? {};
  }
}
