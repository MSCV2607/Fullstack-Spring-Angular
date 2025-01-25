import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemComponent, TotalComponent],
  templateUrl: './invoice.component.html',

})
export class InvoiceComponent implements OnInit {

  invoice!: invoice;
  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number) { 
    this.invoice = this.service.remove(id);
  }
  
}
