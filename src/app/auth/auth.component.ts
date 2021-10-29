import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginToken } from './model/login.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(
    private readonly authService: AuthService,
    private readonly activatedRoute:ActivatedRoute,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(map((params:any)=>params.action))
    .subscribe((action)=>{
      if(action === 'logout'){
        sessionStorage.removeItem('token')
        this.router.navigateByUrl('/auth/login')
      } else if (sessionStorage.getItem('token') && action === 'login'){
        this.router.navigateByUrl('/')
      }
    })
  }

  onFormSubmit():void{
    console.log('login value:', this.loginForm.value);
    if(this.loginForm.valid){
      this.authService
      .login(this.loginForm.value)
      .subscribe((response:LoginToken)=>{
        sessionStorage.setItem('token', response.token)
        this.router.navigateByUrl('/')
      }, console.error
      )
    }
  }

  isFieldValid(fieldName: string, parent?:AbstractControl):{[key:string]:boolean}{
    let control: AbstractControl = this.loginForm.get(fieldName) as AbstractControl;

    const classCss = {
      'is-invalid':false,
      'is-valid':false
    }

    if(parent){
      control = parent;
    }

    if(control && control.invalid && control.touched){
      classCss['is-invalid']=true;
    } else if(control && control.valid){
      classCss['is-valid']=true
    } 

    return classCss;
  }
}
