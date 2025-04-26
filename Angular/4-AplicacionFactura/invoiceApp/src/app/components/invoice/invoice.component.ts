// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

// Decorador que define el componente
@Component({
  selector: 'app-invoice', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemComponent, TotalComponent, FormItemComponent], // Importaciones del componente
  templateUrl: './invoice.component.html', // Ruta del archivo de plantilla HTML
})
export class InvoiceComponent implements OnInit {

  invoice!: invoice; // Propiedad que almacena la factura

  // Constructor que inyecta el servicio de facturas
  constructor(private service: InvoiceService) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.invoice = this.service.getInvoice(); // Obtiene la factura del servicio
  }

  // Método para eliminar un item de la factura
  removeItem(id: number) { 
    this.invoice = this.service.remove(id); // Elimina el item y actualiza la factura
  }

  // Método para agregar un nuevo item a la factura
  addItem(item: Item) {
    this.invoice = this.service.save(item); // Guarda el item y actualiza la factura
  }
}