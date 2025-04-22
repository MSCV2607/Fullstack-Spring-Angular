import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',

})
export class UserAppComponent {



  title: string = 'Listado de Usuarios';

  users: User[] = [];

  userSelected: User;

  constructor(private service: UserService) { 
    this.userSelected = new User;
  }

  ngOnInit() {
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User) {
    this.users = [... this.users, {...user, id: new Date().getTime()}];
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id != id);
  }

  setSelectedUser(userRow: User): void {

    this.userSelected = {... userRow};

  }

}
