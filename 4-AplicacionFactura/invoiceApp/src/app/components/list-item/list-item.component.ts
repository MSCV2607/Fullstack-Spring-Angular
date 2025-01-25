// Importaciones necesarias para el componente
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

// Decorador que define el componente
@Component({
  selector: 'list-item', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [RowItemComponent], // Importaciones del componente
  templateUrl: './list-item.component.html', // Ruta del archivo de plantilla HTML
})
export class ListItemComponent {
  @Input() items!: Item[]; // Propiedad de entrada que recibe una lista de items

  @Output() removeEventEmmiter: EventEmitter<number> = new EventEmitter(); // Evento de salida para eliminar un item

  // Método para emitir el evento de eliminación de un item
  onRemove(id: number) {
    this.removeEventEmmiter.emit(id);
  }
}