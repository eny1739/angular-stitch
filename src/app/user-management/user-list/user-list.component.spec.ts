import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
});
