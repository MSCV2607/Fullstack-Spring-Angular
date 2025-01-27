import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent {

  products: Product[] = [];

  constructor(private service: ProductService) { }

}
