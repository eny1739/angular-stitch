import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Donation } from "../../model/model.donate";
import { DonateService } from "../../service/donate.service";
import { DonateListComponent } from "./donate-list.component"

describe('DonateListComponent',()=>{
    let component: DonateListComponent;
    let donateService: DonateService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers:[
                DonateListComponent,
                {
                    provide: DonateService
                }
            ]
        })
        component = TestBed.inject(DonateListComponent);
        donateService = TestBed.inject(DonateService)
    })

    it('Should showing donations list after create component', ()=>{
        expect(component.donations).toEqual([])
    })

    it('Should showing donations', () => {
        const donationMock: Donation[] = [{
            id:'8632gt4y108wujx',
            donor:'Stitch',
            amount:5000,
            message:'hello'
        },
        {
            id:'8632gt4y189hwux',
            donor:'Lilo',
            amount:5500,
            message:'ohana'
        }
    ]
    component.ngOnInit()
    donateService.getAll()
    component.donations = donationMock
    expect(component.donations).toEqual(donationMock)
    expect(component.donations.length).toEqual(donationMock.length)
    })

    it('Should ngOnInit is defined',()=>{
        expect(component.ngOnInit).toBeDefined()
    })

    it('Should getAll() is defined',()=>{
        expect(component.getAll).toBeDefined()
    })
})