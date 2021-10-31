import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user-management.interface';
import { UserTodoService } from '../services/user-todo.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let userService: UserTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([])],
      providers: [
        UserListComponent,
        {
          provide: UserTodoService
        }
      ]
    })
    component = TestBed.inject(UserListComponent);
    userService = TestBed.inject(UserTodoService)
  });

  it('should showing users list after create component', () => {
    expect(component.users).toEqual([]);
  });

  it('should showing users', () => {
    const userMock: User[] = [
      {
        id: '3534dd',
        username: 'Arif',
        password: 'sfdf',
        fullName: 'Arif Taulana',
        email: 'ari@gmail.com',
        phone: '5436456557'
      },
      {
        id: '4534dd',
        username: 'Syang',
        password: 'sfdfd',
        fullName: 'Sayang Taulana',
        email: 'syang@gmail.com',
        phone: '5435456557'
      },
      {
        id: '5534dd',
        username: 'Syeba',
        password: 'sfdf',
        fullName: 'Syeba Taulana',
        email: 'syeba@gmail.com',
        phone: '5434656557'
      },
    ];
    component.ngOnInit();
    userService.getAllUser();
    component.users = userMock;
    expect(component.users).toEqual(userMock)
    expect(component.users.length).toEqual(userMock.length)
  })

  it('should oncheckUser is defined', () => {
    expect(component.onCheckTodo).toBeDefined()
  })
});
