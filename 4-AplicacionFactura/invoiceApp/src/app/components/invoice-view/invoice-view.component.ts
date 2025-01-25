// Importaciones necesarias para el componente
import { Component, Input } from '@angular/core';

// Decorador que define el componente
@Component({
  selector: 'invoice-view', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  templateUrl: './invoice-view.component.html', // Ruta del archivo de plantilla HTML
})
export class InvoiceViewComponent {
  @Input() id!: number; // Propiedad de entrada que recibe el ID de la factura
  @Input() name!: string; // Propiedad de entrada que recibe el nombre de la factura
}