import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DonateService } from "../../service/donate.service";
import { DonateFormComponent } from "./donate-form.component"

describe('DonationFormComponent', ()=>{
    let component: DonateFormComponent;
    let fixture: ComponentFixture<DonateFormComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations:[DonateFormComponent],
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers:[DonateService]      
        })
        .compileComponents()
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(DonateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    })

    const donationForm = (id: string, donor:string, amount:number, message:string) =>{
        component.donationForm.controls['donor'].setValue(donor);
        component.donationForm.controls['amount'].setValue(amount);
        component.donationForm.controls['message'].setValue(message);
    }

    it('Component donation created', () => {
        expect(component).toBeTruthy()
    })

    it('Component donation from initial state', ()=>{
        expect(component.donationForm).toBeDefined();
        expect(component.donationForm.valid).toBeDefined();
        expect(component.donationForm.invalid).toBeDefined();
    })
})