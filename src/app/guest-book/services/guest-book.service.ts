import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuestBook } from '../model/guest-book';

@Injectable({
  providedIn: 'root'
})
export class GuestBookService {

  constructor(private readonly http: HttpClient) { }

  private guestSubject: Subject<boolean> = new Subject<boolean>();

  public listUpdated(): Observable<boolean> {
    return this.guestSubject.asObservable();
  }

  public getAll(): Observable<GuestBook[]>{
    return this.http.get<GuestBook[]>("/api/guest-book");
  }

  public save(guestBook: GuestBook): Observable<void> {
    if (guestBook.id) {
      return this.http.put<GuestBook>(`/api/guest-book/`, guestBook)
      .pipe(
        map(()=> this.guestSubject.next(true))
      )
      }else{
        return this.http.post<GuestBook>(`/api/guest-book/`, guestBook)
        .pipe(
          map(()=> this.guestSubject.next(true))
      )
    }
  }
}
