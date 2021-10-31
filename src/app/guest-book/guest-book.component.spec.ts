import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { GuestBookComponent } from "./guest-book.component";
import { GuestBook } from "./model/guest-book";
import { GuestBookService } from "./services/guest-book.service";

describe('GuestBook Component', () => {
    let component: GuestBookComponent;
    let guestService: GuestBookService;
    let fixture: ComponentFixture<GuestBookComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ GuestBookComponent ],
          imports:[HttpClientTestingModule, Ng2SearchPipeModule, RouterTestingModule.withRoutes([{path: 'guest-book', component: GuestBookComponent}])],
          providers:[GuestBookService]
        })
        .compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(GuestBookComponent);
        component = fixture.componentInstance;
        guestService = TestBed.inject(GuestBookService)
        fixture.detectChanges();
    });


    it('Should showing guest book list after creating component', () => {
        expect(component.guests).toEqual([]);
    })

    it('Should showing guest book', () => {
        const guestMock: GuestBook[] = [
            {
                name:'mock1',
                email:'mock1@mail'
            },
            {
                name:'mock2',
                email:'mock2@mail'
            },
        ];
        component.ngOnInit();
        guestService.getAll();
        component.guests = guestMock;
        expect(component.guests).toEqual(guestMock);
        expect(component.guests.length).toEqual(guestMock.length);
    })

    it('Should onSubmit is Defined', () => {
        expect(component.onSubmit).toBeDefined();
    })

    it('Should onDelete is Defined', () => {
        expect(component.onDelete).toBeDefined();
    })

    it('Should getAll is Defined', () => {
        expect(component.getAll).toBeDefined();
    })

    it('Should getForm is Defined', () => {
        expect(component.getForm).toBeDefined();
    })

    it('Should isFieldValid is Defined', () => {
        expect(component.isFieldValid).toBeDefined();
    })

    it('Should isLoggedIn is Defined', () => {
        expect(component.isLoggedIn).toBeDefined();
    })

    it('Should isValid is Defined', () => {
        expect(component.isValid).toBeDefined();
    })

    it('Should ngOnInit is Defined', () => {
        expect(component.ngOnInit).toBeDefined();
    })

    it('Should setFormValues is Defined', () => {
        expect(component.setFormValues).toBeDefined();
    })

    const form = (name: string, email: string, message: string) => {
        component.guestForm.controls['name'].setValue(name);
        component.guestForm.controls['email'].setValue(email);
        component.guestForm.controls['message'].setValue(message);
    }

    it('Component created', () => {
        expect(component).toBeTruthy();
    })

    it('Component form initial state', () => {
        expect(component.guestForm).toBeDefined();
        expect(component.guestForm.valid).toBeDefined();
        expect(component.guestForm.invalid).toBeDefined();
    })

    it('GuestForm check  validity', () => {
        form('mock', 'mock@mail', ' ')
        const guestMock: GuestBook = {
            name: 'mock',
            email: 'mock@mail',
            message: ' '
        }
        expect(component.guestForm.value).toEqual(guestMock);
    })

    it('GuestForm field name validity', () => {
        let error : any = {};
        let name: any = component.guestForm.controls['name'];
        expect(name.valid).toBeFalse();

        error = name.errors || {};
        expect(error['required']).toBeTruthy();
    
    })

    it('GuestForm field email validity', () => {
        let error : any = {};
        let email: any = component.guestForm.controls['email'];
        expect(email.valid).toBeFalse();

        error = email.errors || {};
        expect(error['required']).toBeTruthy();
    })


})



