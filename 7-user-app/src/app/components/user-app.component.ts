import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-app.component.html',

})
export class UserAppComponent {

  title: string = 'Listado de Usuarios';

  users: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.findAll().subscribe(users => this.users = users);
  }



}
