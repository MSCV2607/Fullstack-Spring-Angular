import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: invoice;
  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
  
}
