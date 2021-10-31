import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BlogService } from "../../services/blog.service";
import { ViewMoreComponent } from "./view-more.component";

describe('view-more component', () => {
    let component: ViewMoreComponent;
    let blogService: BlogService;
    let fixture: ComponentFixture<ViewMoreComponent>;
    let title: string = `JuDul yAng !a'n#â ê, î, ô, û2`;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ ViewMoreComponent ],
          imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([{path: 'blog', component: ViewMoreComponent}])],
          providers:[BlogService]
        })
        .compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(ViewMoreComponent);
        component = fixture.componentInstance;
        blogService = TestBed.inject(BlogService)
        fixture.detectChanges();
    });

    it('Should getForm is Defined', () => {
        expect(component.getForm).toBeDefined();
    })

    it('Should ngOnInit is Defined', () => {
        expect(component.ngOnInit).toBeDefined();
    })
})