import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Blog } from "../model/blog";
import { BlogService } from "./blog.service";

describe('BlogService with HTTP Service', () => {
  let blogService: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    blogService = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  }); 

  afterEach(() => {
    httpMock.verify();
  });

  it('Should be defined while GET from api/pages/group3/blogs', ()=> {
    const url = 'api/pages/group3/blogs';

    blogService.getAll()
    .subscribe((response: Blog[])=> {
      expect(response).toBeDefined();
    })
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET')
  });

  it('Should be equal with mock while POST from /api/blogs',() => {
    const url = '/api/blogs';
    const mockBlog: Blog ={
      title:'mock title',
      author:'mock author',
      content: 'mock content',
      url: 'mokc-title'
    }
    blogService.save(mockBlog).subscribe(
      (response: any) => {
        expect(response).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockBlog);
  })

  it('Should be equal with mock while PUT from /api/blogs',() => {
    const url = '/api/blogs';
    const mockBlog: Blog ={
      id: '1',
      title:'mock title',
      author:'mock author',
      content: 'mock content',
      url: 'mock-title'
    }
    blogService.save(mockBlog).subscribe(
      (response: any) => {
        expect(response).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(mockBlog);
  })

  

});
