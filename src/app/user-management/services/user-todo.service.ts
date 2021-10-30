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
}
