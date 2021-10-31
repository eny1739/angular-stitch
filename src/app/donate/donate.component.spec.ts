import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DonateComponent } from "./donate.component"
import { DonateService } from "./service/donate.service";

describe('Donation Component',() => {
    let component: DonateComponent;
    let donationService: DonateService;
    let fixture: ComponentFixture<DonateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DonateComponent],
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([{path:'donate', component:DonateComponent}])],
            providers:[DonateService]
        })
        .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(DonateComponent);
        component = fixture.componentInstance;
        donationService = TestBed.inject(DonateService)
        fixture.detectChanges()
    })

    it('Should ngOnInit() is defined', () => {
        expect(component.ngOnInit).toBeDefined()
    })
})