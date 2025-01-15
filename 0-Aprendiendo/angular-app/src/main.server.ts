import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Inicializa la aplicación Angular en el servidor
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
