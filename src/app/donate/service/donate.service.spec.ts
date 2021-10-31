import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Donation } from "../model/model.donate";
import { DonateService } from "./donate.service"

describe('Donata service with HTTP service',()=>{
    let donateService: DonateService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[DonateService],
        })
        donateService = TestBed.inject(DonateService);
        httpMock = TestBed.inject(HttpTestingController);
    })

    afterEach(()=>{
        httpMock.verify();
    })

    it('Should be defined while GET from api/donations',()=>{
        const url = 'api/donations';
        donateService.getAll().subscribe((response:Donation[])=>{
            expect(response).toBeDefined()
        })
        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('GET')
    })

    it('Should be equal with mock while POST from /api/pages/group3/donate',()=>{
        const url = '/api/pages/group3/donate';
        const mockDonation:Donation = {
            id: '874rguy874tdsnkld',
            donor: 'mock donor',
            amount: 1000,
            message: 'mock message'
        }
        donateService.save(mockDonation).subscribe((response: any) => {
            expect(response).toBeDefined()
        })
        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('POST')
        expect(request.request.body).toEqual(mockDonation)
    })

    it('Should be equal with mock while GET from api/donations/${id}',()=>{
        const url = 'api/donations/y37tu12dijsjjvekh'
        const mockId = 'y37tu12dijsjjvekh'
        donateService.getById(mockId).subscribe((response:any)=>{
            expect(response).toBeDefined()
        })
        const request = httpMock.expectOne(url)
        expect(request.request.method).toBe('GET')
    })
})

