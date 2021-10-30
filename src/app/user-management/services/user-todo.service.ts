import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';
import { User } from '../models/user-management.interface';

@Injectable({
  providedIn: 'root'
})
export class UserTodoService {
  private readonly storage: Storage = sessionStorage;
  private readonly userSubject: Subject<boolean> = new Subject<boolean>();


  constructor(private readonly http: HttpClient) { }

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`api/users`)
    .pipe()
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(`api/users/${id}`)
  }
  
  public saveUser(user: User): Observable<any> {
    if(!user.id) {
      return this.http.post<User>(`api/users`, user)
      .pipe(
        map((data)=> this.userSubject.next(true)),
      )
    } else {
      console.log(user);
      return this.http.put<User>(`api/users`, user)
      .pipe()
    }
  }

  public deleteUser(id: string): Observable<void> {
    return this.http.delete<void> (`api/users/${id}`)
    .pipe()
  }

  listUpdatedUser(): Observable<boolean> {
    return this.userSubject.asObservable();
  }
}
