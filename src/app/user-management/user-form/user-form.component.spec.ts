import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTodoService } from '../services/user-todo.service';
import { UserFormComponent } from './user-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from '../models/user-management.interface';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([])],
      providers: [UserTodoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const formUser = (id: string, username: string, password: string, fullName: string, email: string, phone: string) => {
    component.userForm.controls['username'].setValue(username);
    component.userForm.controls['password'].setValue(password);
    component.userForm.controls['fullName'].setValue(fullName);
    component.userForm.controls['email'].setValue(email);
    component.userForm.controls['phone'].setValue(phone);
  }

  it('component user created', () => {
    expect(component).toBeTruthy();
  })

  it('getuserform can defined', () => {
    expect(component.getUserForm).toBeDefined();
  })

  it('component user from initial state', () => {
    expect(component.userForm).toBeDefined();
    expect(component.userForm.valid).toBeDefined();
    expect(component.userForm.invalid).toBeDefined()
  })

  it('userForm field validity', () => {
    let error: ValidationErrors = {};
    let name: AbstractControl = component.userForm.controls['username'] as AbstractControl
    expect(name.valid).toBeFalse()

    error = name.errors || {};
    expect(error['required']).toBeTruthy()

    component.userForm.get('name')?.setValue('siapa')
    error = name.errors!['minlength'] || {};
    expect(error).toBeTruthy
  })

  it('Check Validity Form Component User', () => {
    formUser('abc', 'brans', 'pass', 'sringo ringo', 'brans@gmail.com', '02222');
    const userMock: User = {
      id: 'abc',
      username: 'brans',
      password: 'pass',
      fullName: 'sringo ringo',
      email: 'brans@gmail.com',
      phone: '02222'
    };
    expect(component.userForm.value).toEqual(userMock);
  });
});
