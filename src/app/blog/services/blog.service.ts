import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from '../model/blog';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private readonly http: HttpClient) { }

  private blogSubject: Subject<boolean> = new Subject<boolean>();

  public listUpdated(): Observable<boolean> {
    return this.blogSubject.asObservable();
  }

  public getAll(): Observable<Blog[]>{
    return this.http.get<Blog[]>("api/pages/group3/blogs")
  }

  public delete(id: string): Observable<void>{
    return this.http.delete<void>(`/api/blogs/${id}`);
  }

  public save(blog: Blog): Observable<void> {
    if (blog.id) {
      return this.http.put<Blog>(`/api/blogs`, blog)
      .pipe(
        map(()=> this.blogSubject.next(true))
      )
      }else{
        return this.http.post<Blog>(`/api/blogs`, blog)
        .pipe(
          map(()=> this.blogSubject.next(true))
      )
    }
  }

}
