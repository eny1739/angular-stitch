import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { delay, map, retry, switchMap } from 'rxjs/operators';
import { AlertMessage } from '../models/alert-message-interface';
import { User } from '../models/user-management.interface';
import { UserTodoService } from '../services/user-todo.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserTodoService,
    private readonly router: Router

  ) { }

  user?: User;
  message?: AlertMessage;

  userForm: FormGroup = new FormGroup({
    id!: new FormControl(),
    username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    fullName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(11)])
  })

  ngOnInit(): void {
    this.getUserForm();
  }

  getUserForm(){
    this.activatedRoute.params
    .pipe(
      map((params) => params.id),
      delay(500),
      switchMap((id: string) => {
        if(!id) return EMPTY;
        else return this.userService.getUserById(id)
      })
    )
    .subscribe(
      (user: User) => {
        if(user){
          this.setFormValues(user)
        }
      },
      console.error
    )
  }
 
  setFormValues(user: User): void {
    this.userForm.get('username')?.setValue(user.username);
    this.userForm.get('password')?.setValue(user.password);
    this.userForm.get('fullName')?.setValue(user.fullName);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('phone')?.setValue(user.phone);
  }

  onSubmitTodo(): void {
    const user: User = this.userForm.value;

    console.log('user form value:', user, this);

    this.userService.saveUser(user)
    .subscribe(() => {
      this.router.navigateByUrl('/user-mangement')
    })
    
  }
  

}
