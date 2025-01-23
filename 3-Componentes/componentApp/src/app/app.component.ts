import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //Importación de los componentes CounterComponent
  imports: [CounterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentApp';

  // Subtítulo que será enviado al componente CounterComponent como una propiedad de entrada
  subTitle = 'Contador con estado de sesion';
}
