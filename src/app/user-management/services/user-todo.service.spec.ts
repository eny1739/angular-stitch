import { TestBed } from '@angular/core/testing';

import { UserTodoService } from './user-todo.service';

describe('UserTodoService', () => {
  let service: UserTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
