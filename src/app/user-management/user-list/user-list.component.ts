import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user-management.interface';
import { UserTodoService } from '../services/user-todo.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] =[]
  subcriber!: Observer<any> 

  constructor(private readonly userService: UserTodoService) { }

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
    };
    this.userService.getAllUser()
    .pipe(delay(500))
    .subscribe(this.subcriber)
  }

}
