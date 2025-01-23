import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
// Definición de la clase CounterComponent que implementa la interfaz OnInit
export class CounterComponent implements OnInit {

  // Declaración e inicialización de la variable 'counter' con un valor inicial de 0
  counter: number = 0;

  // Método requerido por la interfaz OnInit, que se ejecuta una vez que el componente es inicializado
  ngOnInit(): void {
    // Recupera el valor almacenado en localStorage con la clave 'counter'
    // Si no existe, inicializa el contador en 0 usando el operador lógico "||"
    this.counter = parseInt(localStorage.getItem('counter')!) || 0;

    // Imprime un mensaje en la consola para indicar que el componente fue creado
    console.log("Creando componente");
  }

  // Método para incrementar el valor del contador
  setCounter(): void {
    // Incrementa el valor actual de la variable 'counter' en 1
    this.counter++;

    // Actualiza el valor del contador en localStorage con el nuevo valor convertido a string
    localStorage.setItem('counter', this.counter.toString());
  }
}