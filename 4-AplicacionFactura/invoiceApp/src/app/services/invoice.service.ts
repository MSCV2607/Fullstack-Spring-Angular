// Importaciones necesarias desde Angular y los modelos de datos
import { Injectable } from '@angular/core'; // Decorador para indicar que esta clase es un servicio inyectable
import { invoiceData } from '../data/invoice.data'; // Datos de ejemplo para la factura
import { invoice } from '../models/invoice'; // Modelo de factura
import { Item } from '../models/item'; // Modelo de ítem (artículo)

// Decorador para marcar esta clase como un servicio inyectable en el nivel raíz de la aplicación
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  // Propiedad privada que representa la factura actual, inicializada con datos predefinidos
  private invoice: invoice = invoiceData;

  // Constructor del servicio (vacío en este caso)
  constructor() { }

  // Método para obtener la factura actual con el total calculado
  getInvoice(): invoice {
    const total = this.calculateTotal(); // Calcula el total de la factura
    return { ...this.invoice, total }; // Devuelve la factura actual con el total incluido
  }

  // Método para eliminar un ítem de la factura por su ID
  remove(id: number) {
    // Filtra los ítems de la factura, excluyendo el ítem con el ID especificado
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    const total = this.calculateTotal(); // Recalcula el total después de eliminar el ítem

    // Devuelve la factura actualizada con el total recalculado
    return { ...this.invoice, total };
  }

  // Lógica para calcular el total de la factura
  calculateTotal() {
    /*
    // Versión comentada: cálculo manual del total sumando los totales de cada ítem
    let total = 0;

    this.invoice.items.forEach(item => {
      total += item.total();
    });

    return total;
    */

    // Versión actual: utiliza el método reduce para calcular el total de forma más concisa
    return this.invoice.items.reduce(
      (total, item) => total + (item.precio * item.cantidad), // Multiplica el precio por la cantidad de cada ítem y lo suma al total
      0 // Valor inicial del acumulador
    );
  }

  // Método para guardar un nuevo ítem en la factura
  save(item: Item) {
    // Agrega el nuevo ítem a la lista de ítems de la factura
    this.invoice.items = [...this.invoice.items, item];

    const total = this.calculateTotal(); // Recalcula el total después de agregar el ítem

    // Devuelve la factura actualizada con el total recalculado
    return { ...this.invoice, total };
  }
}
