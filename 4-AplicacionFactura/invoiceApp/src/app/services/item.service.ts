import { Injectable } from '@angular/core';
import { invoiceData} from '../data/invoice.data';
import { invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private invoice: invoice = invoiceData;
  constructor() { }

  getInvoice(): invoice {
    return this.invoice;
  }
}
