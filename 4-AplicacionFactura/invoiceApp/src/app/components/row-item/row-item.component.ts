// Importaciones necesarias para el componente
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [], // Importaciones del componente
  templateUrl: './row-item.component.html', // Ruta del archivo de plantilla HTML
})
export class RowItemComponent {
  @Input() item!: Item; // Propiedad de entrada que recibe un objeto de tipo Item
  
  @Output() removeEventEmmiter: EventEmitter<number> = new EventEmitter(); // Evento de salida para eliminar un item

  // Método para emitir el evento de eliminación de un item
  onRemove(id: number) {
    this.removeEventEmmiter.emit(id);
  }
}