import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',

})
export class UserComponent {



  @Input() users: User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectUserEventEmitter = new EventEmitter();

  onRemoveUser(id : number): void {

    const confirmRemove = confirm("¿Está seguro de eliminar el usuario?");
    if (confirmRemove) {

      this.idUserEventEmitter.emit(id);
    }

  }

  onSelectUser(user: User): void {
    this.selectUserEventEmitter.emit(user);
  }


  

}
