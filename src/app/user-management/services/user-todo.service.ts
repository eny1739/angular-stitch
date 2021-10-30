import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserTodoService {
  private readonly storage: Storage = sessionStorage;
  private readonly userSubject: Subject<boolean> = new Subject<boolean>();


  constructor(private readonly http: HttpClient) { }

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`api/users`)
    .pipe(retry(3))
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(`api/users/${id}`)
  }
  
  public saveUser(user: User): Observable<User> {
    if(!user.id) {
      return this.http.post<any>(`api/users`, user)
      .pipe(retry(3))
    } else {
      console.log(user);
      return this.http.put<User>(`api/users`, user)
      .pipe(retry(3))
    }
  }

  public deleteUser(id: string): Observable<void> {
    return this.http.delete<void> (`api/users/${id}`)
    .pipe(retry(3))
  }

  listUpdatedUser(): Observable<boolean> {
    return this.userSubject.asObservable();
  }
}
