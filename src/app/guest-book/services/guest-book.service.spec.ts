import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GuestBook } from '../model/guest-book';
import { GuestBookService } from './guest-book.service';

describe('GuestBookService with HTTP Service', () => {
  let guestService: GuestBookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GuestBookService],
    });
    guestService = TestBed.inject(GuestBookService);
    httpMock = TestBed.inject(HttpTestingController);
  }); 

  afterEach(() => {
    httpMock.verify();
  });

  it('Should be dfined while GET from /api/guest-book', ()=> {
    const url = '/api/guest-book';

    guestService.getAll()
    .subscribe((response: GuestBook[])=> {
      expect(response).toBeDefined();
    })
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET')
  });

  it('Should be equal with mock while POST from api/guest-book',() => {
    const url = '/api/pages/group3/guest-book/';
    const mockGuest: GuestBook ={
      name: 'mock',
      email: 'mock@mail'
    }
    guestService.save(mockGuest).subscribe(
      (response: any) => {
        expect(response).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockGuest);
  })

  it('Should be equal with mock while PUT from api/guest-book',() => {
    const url = '/api/guest-book/';
    const mockGuest: GuestBook ={
      id: '1',
      name: 'mock',
      email: 'mock@mail'
    }
    guestService.save(mockGuest).subscribe(
      (response: any) => {
        expect(response).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(mockGuest);
  })

});
