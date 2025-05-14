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
  private url = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  //Obtener los usuarios
  //El método findAll() devuelve un Observable de tipo User[]
  findAll(): Observable<User[]>{8080
    return this.http.get<User[]>(this.url);
  }

  findById(id: number) : Observable<User>{
    return this.http.get<User>(this.url + '/' + id);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.url + '/' + user.id, user);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
