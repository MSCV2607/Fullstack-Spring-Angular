import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartAppComponent } from '../cart-app/cart-app.component';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',

})
export class CartModalComponent {

  @Input() items: CartItem[] = [];
  @Input() total = 0;

  @Output() idProductoEventEmitter = new EventEmitter();
  
    onDeleateCart(id: number) {
      this.idProductoEventEmitter.emit(id);
    }

    @Output() openEventEmitter = new EventEmitter();

  openCart(): void {
    this.openEventEmitter.emit();
  }
}
