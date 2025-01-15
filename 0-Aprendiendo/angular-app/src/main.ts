// Importación de bootstrapApplication desde '@angular/platform-browser'.
// Esta función se usa para iniciar la aplicación Angular en el navegador.
import { bootstrapApplication } from '@angular/platform-browser';

// Importación de la configuración de la aplicación desde el archivo app.config.ts
// appConfig contiene la configuración necesaria para la inicialización de la aplicación.
import { appConfig } from './app/app.config';

// Importación del componente principal de la aplicación (AppComponent)
import { AppComponent } from './app/app.component';

// Llamada a la función bootstrapApplication para arrancar la aplicación Angular
// Se pasa como argumento el componente principal (AppComponent) y la configuración de la aplicación (appConfig).
bootstrapApplication(AppComponent, appConfig)
  // Manejo de errores: si ocurre algún error durante el arranque, se captura y se muestra en la consola.
  .catch((err) => console.error(err));
