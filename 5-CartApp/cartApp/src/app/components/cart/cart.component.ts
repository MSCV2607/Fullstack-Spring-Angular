import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',

})
export class CartComponent {

  @Input() items: CartItem[] = [];
  @Input() total = 0;

  @Output() idProductoEventEmitter = new EventEmitter();

  onDeleateCart(id: number) {
    this.idProductoEventEmitter.emit(id);
  }

}
