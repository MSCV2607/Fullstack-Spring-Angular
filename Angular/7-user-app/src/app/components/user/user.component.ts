import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',

})
export class UserComponent {

  title: string = 'Listado de Usuarios';


  users: User[] = [];



  constructor( private service : UserService, private router: Router, private sharingData: SharingDataService) {
    
    if( this.router.getCurrentNavigation()?.extras.state) {
      this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
  } else {
    this.service.findAll().subscribe(users => this.users = users);
  }


  }

  onRemoveUser(id: number): void {

    this.sharingData.idUserEventEmitter.emit(id);


  }

  onSelectUser(user: User): void {
    //this.sharingData.selectUserEventEmitter.emit(user);
    this.router.navigate(['/users/edit', user.id], { state: { user } });
  }




}
