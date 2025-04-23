import { createReducer, on } from "@ngrx/store";
import { CartItem } from "../models/cartItem";
import { total } from "./items.actions";

export interface ItemState {
    items: CartItem[];
    total: number;
}


export const initialState: ItemState = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    total: 0
}

export const itemsReducer = createReducer (
    initialState,
    on(add, (state, { product }) => {
        const hasItem = state.items.find(item => item.product.id === product.id);
              if (hasItem) {
                return state.items = this.items.map(item => {
                  if (item.product.id === product.id) {
                    return {
                      ...item,
                      quantity: item.quantity + 1
                    }
                  }
                  return item;
                })
              } else {
                this.items = [... this.items, { product: { ...product }, quantity: 1 }];
              }
    })
)