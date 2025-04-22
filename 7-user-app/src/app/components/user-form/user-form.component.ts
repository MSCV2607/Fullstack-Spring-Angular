import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',

})
export class UserFormComponent {

  @Input() user: User;

  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  @Output() openEventEmitter = new EventEmitter();

  //@Input() open: boolean = false;


  constructor() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.newUserEventEmitter.emit(this.user);
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


  onOpenClose(): void {
    this.openEventEmitter.emit();
  }
}
