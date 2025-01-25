// Importaciones necesarias para el componente
import { Component, Input } from '@angular/core';
import { cliente } from '../../models/cliente';

// Decorador que define el componente
@Component({
  selector: 'client-view', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [], // Importaciones del componente
  templateUrl: './client-view.component.html', // Ruta del archivo de plantilla HTML
})
export class ClientViewComponent {
  @Input() cliente!: cliente; // Propiedad de entrada que recibe un objeto de tipo cliente
}
