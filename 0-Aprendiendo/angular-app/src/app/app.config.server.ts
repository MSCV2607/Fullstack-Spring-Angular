import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()  // Proporciona la configuración para la renderización en el servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig); // Mezcla la configuración de la aplicación con la configuración del servidor
