import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTodoService } from '../services/user-todo.service';
import { UserFormComponent } from './user-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

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

  it('component user from initial state', () => {
    expect(component.userForm).toBeDefined();
    expect(component.userForm.valid).toBeDefined();
    expect(component.userForm.invalid).toBeDefined()
  })
});
