import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  // Inicialización del contador con un valor predeterminado de 0
  counter: number = 0;

  // Título principal de la aplicación
  title = 'componentApp';

  // Subtítulo que será enviado al componente CounterComponent como una propiedad de entrada
  subTitle = 'Contador con estado de sesion';

  // Método requerido por la interfaz OnInit, ejecutado una vez que el componente es inicializado
  ngOnInit(): void {
    // Recupera el valor almacenado en localStorage con la clave 'counter'
    // Si no existe, inicializa el contador en 0 usando el operador lógico "||"
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;
  }

  // Método que actualiza el valor del contador cuando recibe un evento del componente hijo
  setCounter(event: number): void {
    this.counter = event;
  }
}
