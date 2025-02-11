import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  constructor(private service: ProductService) { }
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}
