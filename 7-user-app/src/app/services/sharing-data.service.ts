import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  public newUserEventEmitter: EventEmitter<User> = new EventEmitter();


  public idUserEventEmitter = new EventEmitter();

  public selectUserEventEmitter = new EventEmitter();

  constructor() {

  }
  getNewUserEventEmitter(): EventEmitter<User> {
    return this.newUserEventEmitter;
  }
  getIdUserEventEmitter(): EventEmitter<number> {
    return this.idUserEventEmitter;
  }
  getSelectUserEventEmitter(): EventEmitter<User> {
    return this.selectUserEventEmitter;
  }
}
