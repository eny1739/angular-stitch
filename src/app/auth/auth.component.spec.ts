import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { from, Observable } from "rxjs";
import { AuthComponent } from "./auth.component"
import { Login, LoginToken } from "./model/login.model";
import { AuthService } from "./services/auth.service";

describe('AuthComponent',()=>{
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let authService:AuthService

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations:[AuthComponent],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers:[AuthService]
        }).compileComponents();
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService)
        fixture.detectChanges()
    })

    const form = (username:string, password:string) => {
        component.loginForm.controls["username"].setValue(username);
        component.loginForm.controls["password"].setValue(password);
    }

    it('Component created',()=>{
        expect(component).toBeTruthy()
    })

    it('Component form initial state',()=>{
        expect(component.loginForm).toBeDefined();
        expect(component.loginForm.valid).toBeDefined();
        expect(component.loginForm.invalid).toBeDefined();
    })

    it('Check validity',()=>{
        form("group3", "group3");
        const loginMock: Login = {username:"group3", password:"group3"};
        expect(component.loginForm.value).toEqual(loginMock)
    })

    it('LoginForm field validity',()=>{
        let error:ValidationErrors = {};
        let username:AbstractControl = component.loginForm.controls['username'];
        expect(username.valid).toBeFalse();

        username.setValue("group3");
        error = username.errors || {}
        expect(error['required']).toBeFalsy()

        let password: AbstractControl = component.loginForm.controls['password'];
        expect(password.valid).toBeFalse()

        password.setValue("group3");
        error = password.errors || {}
        expect(error['required']).toBeFalsy()
    })

    it('Successfully login from onFormSubmit()',()=>{
        const mockTokenLogin:LoginToken = {
            token:'2387tt834%^%&^&#dtfdgui'
        }
        const spy = spyOn(authService,'login')
        .and.callThrough().and.callFake(():Observable<LoginToken> => {
            return from([mockTokenLogin])
        })
        component.loginForm.get('username')?.setValue('group3')
        component.loginForm.get('password')?.setValue('group3')
        component.onFormSubmit()
        expect(spy).toHaveBeenCalled();
    })
})
