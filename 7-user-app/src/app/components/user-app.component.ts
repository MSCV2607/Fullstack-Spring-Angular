import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';
import { Route, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css'],

})
export class UserAppComponent {





  users: User[] = [];





  constructor(private service: UserService, private sharingData: SharingDataService, private router: Router) { 

  }

  ngOnInit() {
    this.service.findAll().subscribe(users => this.users = users);
    this.addUser();

    this.removeUser();
  }

  addUser() {
    this.sharingData.newUserEventEmitter.subscribe(user => {
    if (user.id>0) {
      this.users = this.users.map( u => (u.id == user.id)? {...user}: u );
    } else {
    this.users = [... this.users, {...user, id: new Date().getTime()}];
    }

    this.router.navigate(['/users'], { state: { users: this.users } });

    Swal.fire({
      title: "Guardado",
      text: "Usuario guardado correctamente",
      icon: "success"
    });
    

  })

  }

  

  removeUser(): void {
    this.sharingData.idUserEventEmitter.subscribe(id => {

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
        this.router.navigate(['/users/create'], {skipLocationChange: true}).then(() => { 
          this.router.navigate(['/users'], { state: { users: this.users } });
        })

        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado correctamente",
          icon: "success"
        });
      }
    });
  })
   
  }


  

}
