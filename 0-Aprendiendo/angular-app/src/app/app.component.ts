// Importación del decorador Component de Angular y el RouterOutlet
// El decorador Component se utiliza para definir un componente en Angular.
// RouterOutlet es un servicio que se utiliza para definir el lugar donde se cargan las rutas.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Definición del componente AppComponent
@Component({
  // selector es el nombre del componente que se usará en el HTML
  selector: 'app-root', 

  // standalone: true indica que el componente es autónomo y no necesita módulos adicionales
  standalone: true, 

  // imports es una lista de módulos que necesita el componente, en este caso RouterOutlet
  imports: [RouterOutlet],

  // archivo HTML que se utilizará para la plantilla del componente
  templateUrl: './app.component.html',

  // archivo CSS que se utilizará para los estilos del componente
  styleUrl: './app.component.css'
})

// Clase del componente AppComponent
export class AppComponent {
  // Propiedad title que se puede utilizar en el template HTML
  title = 'angular-app';
}
