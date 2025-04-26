//Datos de prueba para la factura

import { invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes PC',
    cliente: {
        nombre: 'Juan Perez',
        apellido: 'Gonzalez',
        direccion: {
            pais: 'Argentina',
            ciudad: 'Buenos Aires',
            calle: 'Av. Corrientes',
            numero: 1234
        }
    },
    compania: {
        nombre: 'Mi Empresa',
        numeroFiscal: 1234567,
    },
    items: [
        {
            id: 1,
            nombreProducto: "Intel Core i7", 
            precio: 1000,
            cantidad: 4
        },
        {
            id: 2,
            nombreProducto: "Motherboard Asus", 
            precio: 500,
            cantidad: 1
        },
        {
            id: 3,
            nombreProducto: "RAM 16GB", 
            precio: 200,
            cantidad: 2
        }
    ]
}
