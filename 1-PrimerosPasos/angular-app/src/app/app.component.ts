import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Cambio de titulo
  title:string = 'Hola mundo Angular desde Componente';

  //Array de usuarios
  users:string[] = ["Pepe", "Juan", "Maria", "Ana"];
  //users:string[] = [];

  //Variable para mostrar u ocultar un elemento
  visible:boolean = false;

  //Switch para mostrar u ocultar un elemento
  setVisible():void{
    /*if (this.visible){
      this.visible = false;
  } else {
    this.visible = true;
  }*/
 //Usando un operador ternario lleva menos codigo
  this.visible = (this.visible) ? false : true;
  console.log('Se hizo un click');
}
}
