// Importaciones necesarias para el componente
import { Component, Input } from '@angular/core';

@Component({
  selector: 'total', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [], // Importaciones del componente
  templateUrl: './total.component.html', // Ruta del archivo de plantilla HTML
})
export class TotalComponent {

  @Input() total: number = 0; // Propiedad de entrada que recibe el total de la factura
}