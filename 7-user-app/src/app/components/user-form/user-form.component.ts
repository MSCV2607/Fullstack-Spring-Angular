import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',

})
export class UserFormComponent {

  @Input() user: User;





  //@Input() open: boolean = false;


  constructor(private sharingData: SharingDataService, private router: Router) {

    if( this.router.getCurrentNavigation()?.extras.state) {
      this.user = this.router.getCurrentNavigation()?.extras.state!['user'];
  } else {
    this.user = new User();
  }

  }

  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.sharingData.getNewUserEventEmitter().emit(this.user);
      console.log(this.user);

    }
    userForm.reset();
    userForm.resetForm();

  }

  onClear(userForm: NgForm): void {
    this.user = new User();
    userForm.reset();
    userForm.resetForm();

  }



}
