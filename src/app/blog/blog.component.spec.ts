// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { RouterTestingModule } from "@angular/router/testing"
// import { BlogComponent } from "./blog.component";
// import { Blog } from "./model/blog";
// import { BlogService } from "./services/blog.service";

// describe('Edit Component', () => {
//     let component: BlogComponent;
//     let blogService: BlogService;
//     let fixture: ComponentFixture<BlogComponent>;
//     let title: string = `JuDul yAng !a'n#â ê, î, ô, û2`;

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//           declarations: [ BlogComponent ],
//           imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([{path: 'blog', component: BlogComponent}])],
//           providers:[BlogService]
//         })
//         .compileComponents();
//     });
    
//     beforeEach(() => {
//         fixture = TestBed.createComponent(BlogComponent);
//         component = fixture.componentInstance;
//         blogService = TestBed.inject(BlogService)
//         fixture.detectChanges();
//     });

//     it('Should showing blog list after creating component', () => {
//         expect(component.blogs).toEqual([]);
//     })

//     it('Should showing blog', () => {
//         const blogMock: Blog[] = [
//             {
//                 title:'mock title',
//                 author:'mock author',
//                 content: 'mock content',
//                 url: 'mokc-title'
//             },
//         ];
//         component.ngOnInit();
//         blogService.getAll();
//         component.blogs = blogMock;
//         expect(component.blogs).toEqual(blogMock);
//         expect(component.blogs.length).toEqual(blogMock.length);
//     })

//     it('Should onSubmit is Defined', () => {
//         expect(component.onSubmit).toBeDefined();
//     })

//     it('Should blogForm is Defined', () => {
//         expect(component.blogForm).toBeDefined();
//     })

//     it('Should blogs is Defined', () => {
//         expect(component.blogs).toBeDefined();
//     })

//     it('Should getAll is Defined', () => {
//         expect(component.getAll).toBeDefined();
//     })

//     it('Should getForm is Defined', () => {
//         expect(component.getForm).toBeDefined();
//     })

//     it('Should isEditing is Defined', () => {
//         expect(component.isEditing).toBeDefined();
//     })

//     it('Should isFieldValid is Defined', () => {
//         expect(component.isFieldValid).toBeDefined();
//     })

//     it('Should isLoggedIn is Defined', () => {
//         expect(component.isLoggedIn).toBeDefined();
//     })
    
//     it('Should isValid is Defined', () => {
//         expect(component.isValid).toBeDefined();
//     })

//     it('Should ngOnInit is Defined', () => {
//         expect(component.ngOnInit).toBeDefined();
//     })

//     it('Should onDelete is Defined', () => {
//         expect(component.onDelete).toBeDefined();
//     })

//     it('Should setFormvalues is Defined', () => {
//         expect(component.setFormValues).toBeDefined();
//     })

//     it('Should sliceContent is Defined', () => {
//         expect(component.sliceContent).toBeDefined();
//     })

//     it('Should titleToSlug is Defined', () => {
//         expect(component.titleToSlug).toBeDefined();
//     })

//     it('Should return url friendly form title', () => {
//         let actual = component.titleToSlug(title);
//         expect(actual).toBe('judul-yang-ana-e-i-o-u2')
//     })

//     it('Should return 50 chararcter content', () => {
//         let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//         let actual = component.sliceContent(content);
//         expect(actual).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing...")
//     })
    
//     it('', () => {
//         let blogForm: Blog;
//         let blog: Blog = {
//             id:'1',
//             title:'mock-title',
//             content:'mock-content',
//             author:'mock-author',
//             url:'mock-title'
//         }
//         component.setFormValues(blog)
//     })

// })