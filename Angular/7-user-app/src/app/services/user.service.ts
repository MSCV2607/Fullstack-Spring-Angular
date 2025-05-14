import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Datos de ejemplo
  private users: User[] = [];

  constructor(private http: HttpClient) { }

  //Obtener los usuarios
  //El método findAll() devuelve un Observable de tipo User[]
  findAll(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }
}
