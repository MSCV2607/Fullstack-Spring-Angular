import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css'],

})
export class UserAppComponent {



  title: string = 'Listado de Usuarios';

  users: User[] = [];

  userSelected: User;

  open: boolean = false;

  constructor(private service: UserService) { 
    this.userSelected = new User;
  }

  ngOnInit() {
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User) {
    if (user.id>0) {
      this.users = this.users.map( u => (u.id == user.id)? {...user}: u );
    } else {
    this.users = [... this.users, {...user, id: new Date().getTime()}];
    }

    Swal.fire({
      title: "Guardado",
      text: "Usuario guardado correctamente",
      icon: "success"
    });
    
    this.userSelected = new User();
    this.setOpen();

  }

  

  removeUser(id: number): void {

    Swal.fire({
      title: "Seguro que quiere eliminar?",
      text: "Cuidado los datos del usuario se perderan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id != id);
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado correctamente",
          icon: "success"
        });
      }
    });

   
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = {... userRow};
    this.open = true;

  }

  setOpen() {
    this.open = !this.open;
  }

}
