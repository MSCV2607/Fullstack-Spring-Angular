// Importación de TestBed desde Angular para configurar y probar el servicio
import { TestBed } from '@angular/core/testing';

// Importación del servicio que se va a probar
import { InvoiceService } from './invoice.service';

// Descripción del conjunto de pruebas para el servicio `InvoiceService`
describe('InvoiceService', () => {
  let service: InvoiceService; // Variable para almacenar la instancia del servicio

  // Configuración inicial que se ejecuta antes de cada prueba
  beforeEach(() => {
    // Configura un módulo de prueba utilizando TestBed
    TestBed.configureTestingModule({});
    // Inyecta el servicio `InvoiceService` para las pruebas
    service = TestBed.inject(InvoiceService);
  });

  // Prueba básica para verificar que el servicio se crea correctamente
  it('should be created', () => {
    // Verifica que la instancia del servicio es válida (existe y no es `null` o `undefined`)
    expect(service).toBeTruthy();
  });
});
