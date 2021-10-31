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

    it('should be equal with mock while POST from api/user-management', () => {
        const url = '/api/user-management'
        const mockUser: User = {
            username: 'mockTitle',
            password: 'sdasdsa',
            fullName: 'Mockysf',
            email: 'mock@gmail.com',
            phone: '534534534'
        }
        userService.saveUser(mockUser).subscribe((Response: any) => {
            expect(Response).toBeDefined();
        })
        const request = httpMock.expectOne(url)
        expect(request.request.method).toBe('POST')
        expect(request.request.body).toEqual(mockUser)
    })

    it('should be equal with mock while PUT from /api/user-management', () => {
        const url = '/api/management'
        const mockBlog: User = {
            id: '3253454354',
            username: 'mockTitle',
            password: 'sdasdsa',
            fullName: 'Mockysf',
            email: 'mock@gmail.com',
            phone: '534534534'
        }
        userService.saveUser(mockBlog).subscribe((Response:any) => {
            expect(Response).toBeDefined()
        })
        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('PUT')
        expect(request.request.body).toEqual(mockBlog)
    })
})
