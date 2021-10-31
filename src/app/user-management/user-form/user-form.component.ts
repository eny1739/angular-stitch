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
  id!: string;
  userForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    fullName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(11)])
  })

  ngOnInit(): void {
    this.getUserForm();
  }

  getUserForm() {
    this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        delay(500),
        switchMap((id: string) => {
          if (!id) return EMPTY;
          else return this.id = id,  this.userService.getUserById(id)
        })
      )
      .subscribe(
        (user: User) => {
          if (user) {
            this.setFormValues(user)
          }
        },
        console.error
      )
  }

  setFormValues(user: User): void {
    this.userForm.addControl('id', new FormControl(''));
    this.userForm.get('id')?.setValue(this.id)
    this.userForm.get('username')?.setValue(user.username);
    this.userForm.get('password')?.setValue(user.password);
    this.userForm.get('fullName')?.setValue(user.fullName);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('phone')?.setValue(user.phone);
  }

  onSubmitUser(): void {
    const user =  this.userForm.value;

    this.message = {
      status: 'success',
      text: `Congratulation, you added the user ${user.fullName}`
    }

    this.userService.saveUser(user).pipe(
    ).subscribe({
      next: () => {},
      error: console.error,
      complete: () => {}
    })

    setTimeout(() => {
      this.message = undefined;
    }, 2000);

    this.userForm.reset();
    this.router.navigateByUrl(`/user-management`)
  }

  onReset(): void {
    this.userForm.reset()
    this.userForm.get('isDone')?.setValue(false)
  }

  isFieldValid(fieldName: string, parent?: AbstractControl) {
    let control: AbstractControl = this.userForm.get(fieldName) as AbstractControl;

    if (parent) {
      control = parent;
    }

    const classed = {
      'is-invalid': false,
      'is-valid': false
    }

    if (control && control.touched && control.invalid) {
      classed['is-invalid'] = true
    } else if (control && control.valid) {
      classed['is-valid'] = true
    }
    return classed;
  }

  displayErrors(fieldName: string): string{
    const control: AbstractControl = this.userForm.get(fieldName) as AbstractControl
    const messages: any = {
      "required": 'field harus diisi',
      "minlength": 'field minimal harus lebih panjang dari {minlength}'
    }

    if(control && control.errors) {
      const error = Object.values(control.errors).pop()
      const key:string = Object.keys(control.errors).pop() as string

      let message = messages [key]
      console.log(message);

      if(key === 'minlength'){
        console.log(error);
        message = messages.replace('(minlength', error.requiredlength)
        
      }
      return message
    }else{return ''}
  }

  getCOntrol(name: string): AbstractControl {
    return this.userForm.get(name) as AbstractControl
  }
}
