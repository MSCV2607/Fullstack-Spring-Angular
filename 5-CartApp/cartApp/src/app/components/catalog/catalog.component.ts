import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {

  products!: Product[];

  productEventEmitter: EventEmitter<Product> = new EventEmitter();

  constructor(private router: Router) {
    this.products = this.router.getCurrentNavigation()?.extras.state!['products'];
  }
  onAddCart(product: Product) {
    this.productEventEmitter.emit(product);
  }

}
