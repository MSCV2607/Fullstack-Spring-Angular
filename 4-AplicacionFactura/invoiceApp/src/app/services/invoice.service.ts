import { Injectable } from '@angular/core';
import { invoiceData} from '../data/invoice.data';
import { invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: invoice = invoiceData;
  constructor() { }

  getInvoice(): invoice {
    const total = this.calculateTotal();
    return {...this.invoice, total};
  }

  //Logica para calcular el total de la factura
  calculateTotal() {
    /*
  let total = 0;

  this.invoice.items.forEach(item => {
    total += item.total();
  });

  return total;
  */
 return this.invoice.items.reduce((total, item) => total + (item.precio*item.cantidad), 0); //reduce es un metodo que recibe una funcion y un valor inicial
}
  
}
