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

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>()
    .pipe(retry(3))
  }
}
