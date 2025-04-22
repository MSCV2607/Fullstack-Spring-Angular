import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',

})
export class UserComponent {

  title: string = 'Listado de Usuarios';


  @Input() users: User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectUserEventEmitter = new EventEmitter();

  onRemoveUser(id : number): void {

      this.idUserEventEmitter.emit(id);
    

  }

  onSelectUser(user: User): void {
    this.selectUserEventEmitter.emit(user);
  }


  

}
