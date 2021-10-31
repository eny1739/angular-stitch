import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { User } from "../models/user-management.interface";
import { UserTodoService } from "./user-todo.service"

describe('userService with HTTP Service', () => {
    let userService:  UserTodoService;
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserTodoService]
        })
        userService = TestBed.inject(UserTodoService)
        httpMock = TestBed.inject(HttpTestingController)
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('should be defned while get from /api/user-management'), () => {
        const url = '/api/user-management'

        userService.getAllUser()
        .subscribe((response: User[]) => {
            expect(response).toBeDefined()
        })
        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('GET')
    }
})