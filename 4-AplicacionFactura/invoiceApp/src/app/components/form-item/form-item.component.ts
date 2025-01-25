// Importaciones necesarias para el componente
import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

// Decorador que define el componente
@Component({
  selector: 'form-item', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [FormsModule], // Importaciones del componente
  templateUrl: './form-item.component.html', // Ruta del archivo de plantilla HTML
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter(); // Evento de salida para agregar un nuevo item

  private counterId = 4; // Contador para asignar IDs únicos a los items

  item: any = {
    nombreProducto: '', // Nombre del producto
    precio: '', // Precio del producto
    cantidad: '', // Cantidad del producto
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({id: this.counterId,...this.item}); // Emite el evento para agregar un nuevo item
      this.counterId++;
  
      // Limpieza de campos del formulario
      this.item = {
        nombreProducto: '',
        precio: '',
        cantidad: '',
      };
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}