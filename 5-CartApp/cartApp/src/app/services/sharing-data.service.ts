import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  get idProductEventEmitter() {
    return this._idProductEventEmitter;
  }
}
