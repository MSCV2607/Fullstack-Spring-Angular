import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { CartItem } from '../../models/cartItem';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CartModalComponent, NavBarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  total: number = 0;

  showCart: boolean = false;

  constructor(private service: ProductService) { }
  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();
  }

  onAddCart(product:Product) {
    const hasItem = this.items.find(item => item.product.id === product.id);
    if(hasItem) {
      this.items = this.items.map(item => {
        if(item.product.id === product.id) {
          return {...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
       });
    } else {
    this.items = [...this.items, { product: {...product}, quantity: 1}];
    }
    this.calculateTotal();
    this.saveSession();
  }

  onDeleateCart(id:number):void {
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
    this.saveSession();
  }

  calculateTotal():void {
    this.total = this.items.reduce((accumulator, item) => {
      return accumulator + (item.product.price * item.quantity);
    }, 0); 
  }

  saveSession():void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  openCart():void {
    this.showCart = !this.showCart;
  }
}
