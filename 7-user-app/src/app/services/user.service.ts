import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Datos de ejemplo
  private users: User[] = [{
    id:1,
    name: 'Juan',
    lastname: 'Pérez',
    email: 'rolo@gmail.com',
    username: 'rolo',
    password: '123456'
  
  },

  {
    id:2,
    name: 'Jose',
    lastname: 'Jual',
    email: 'Jolo@gmail.com',
    username: 'jota',
    password: '123456'
  
  }
];

  constructor() { }

  //Obtener los usuarios
  //El método findAll() devuelve un Observable de tipo User[]
  findAll(): Observable<User[]>{
    return of(this.users)
  }
}
