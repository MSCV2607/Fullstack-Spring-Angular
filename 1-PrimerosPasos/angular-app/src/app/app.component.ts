import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Cambio de titulo
  title:string = 'Hola mundo Angular desde Componente';

  //Array de usuarios
  users = ["Pepe", "Juan", "Maria", "Ana", "Luis", "Pedro", "Sofia", "Lucia", "Carlos", "Javier"];
}
