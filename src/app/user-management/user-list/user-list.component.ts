import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { User } from '../models/user-management.interface';
import { UserTodoService } from '../services/user-todo.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] =[]
  loading: boolean = false
  subcriber?: Observer<any>
  

  constructor(private readonly userService: UserTodoService, private readonly router:Router) { }

  ngOnInit(): void {
    this.getAll();
    this.userService.listUpdatedUser()
    .subscribe((updated: boolean) => {
      if(updated){
        this.getAll()
      }
    })
  }

  getAll():void{
    this.subcriber = {
      next: (users) => {
        this.users = users
      },
      error: console.error,
      complete: () => {this.loading = false}      
    };
    this.loading = true
    this.userService.getAllUser()
    .pipe(delay(500))
    .subscribe(this.subcriber)
  }

  onCheckUser(user: User):void{
    this.subcriber = {
      next: (user: User) => {
        console.log('user update');
        this.router.navigateByUrl(`/user-management/${user.id}`)
      },
      error: console.error,
      complete: () => {this.loading=false}
    };
    this.loading = true;
    this.userService.saveUser(user)
    .pipe(delay(500))
    .subscribe(this.subcriber)
  }

  onDeleteUser(id: string): void{
    this.subcriber = {
      next: (users: User[]) => {
        console.log('user deleted');
        this.users = users
      },
      error: console.error,
      complete: () => {this.loading=false}
    }
    
    this.loading = true
    this.userService.deleteUser(id)
    .pipe(delay(1000),
    switchMap(() => this.userService.getAllUser())
    ).subscribe(this.subcriber)
  }
}
