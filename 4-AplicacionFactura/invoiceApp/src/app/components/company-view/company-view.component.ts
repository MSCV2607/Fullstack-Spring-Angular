// Importaciones necesarias para el componente
import { Component, Input } from '@angular/core';
import { Compania } from '../../models/compania';

// Decorador que define el componente
@Component({
  selector: 'company-view', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [], // Importaciones del componente
  templateUrl: './company-view.component.html', // Ruta del archivo de plantilla HTML
})
export class CompanyViewComponent {
  @Input() compania!: Compania; // Propiedad de entrada que recibe un objeto de tipo Compania
}