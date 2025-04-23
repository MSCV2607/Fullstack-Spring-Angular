import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  public newUserEventEmitter: EventEmitter<User> = new EventEmitter();


  public idUserEventEmitter = new EventEmitter();

  public selectUserEventEmitter = new EventEmitter();

  public findUserByIdEventEmitter = new EventEmitter()

  constructor() {

  }
  
}
