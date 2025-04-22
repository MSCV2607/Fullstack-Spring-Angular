import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',

})
export class UserComponent {

  title: string = 'Listado de Usuarios';


  users: User[] = [];

  idUserEventEmitter = new EventEmitter();

  selectUserEventEmitter = new EventEmitter();


  constructor(private router: Router) {
    this.users = this.router.getCurrentNavigation()?.extras.state!['users'];

    
  }

  onRemoveUser(id: number): void {

    this.idUserEventEmitter.emit(id);


  }

  onSelectUser(user: User): void {
    this.selectUserEventEmitter.emit(user);
  }




}
