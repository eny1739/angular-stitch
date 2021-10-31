import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation } from '../model/model.donate';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  private readonly storage:Storage = sessionStorage;
  private donateSubject:Subject<boolean> = new Subject<boolean>()


  constructor(private readonly http: HttpClient) { }

  public getAll():Observable<Donation[]>{
    return this.http.get<Donation[]>('api/donations')
  }

  public getById(id:string):Observable<Donation>{
    return this.http.get<Donation>(`api/donations/${id}`)
  }

  public save(donation:Donation):Observable<Donation>{
    // return this.http.post<Donation>('/api/donations', donation)
    return this.http.post<Donation>('/api/pages/group3/donate', donation)
  }

  public listUpdated():Observable<boolean>{
    return this.donateSubject.asObservable()
  }
}
