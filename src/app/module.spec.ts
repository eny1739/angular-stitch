import { TestBed } from "@angular/core/testing"
import { Ng2SearchPipe, Ng2SearchPipeModule } from "ng2-search-filter"
import { AboutModule } from "./about/about.module"
import { AppModule } from "./app.module"
import { AuthModule } from "./auth/auth.module"
import { BlogModule } from "./blog/blog.module"
import { DonateModule } from "./donate/donate.module"
import { GuestBookModule } from "./guest-book/guest-book.module"
import { HomeModule } from "./home/home.module"
import { ResumeModule } from "./resume/resume.module"
import { SharedModule } from "./shared/shared.module"
import { UserManagementModule } from "./user-management/user-management.module"

describe("Module Test", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                UserManagementModule,
                SharedModule,
                ResumeModule,
                HomeModule,
                GuestBookModule,
                DonateModule,
                BlogModule,
                AuthModule,
                AboutModule,
            ]
        })
    })

    
    it("Initialize AppModule()", () => {
        const module = TestBed.inject(AppModule)
        expect(module).toBeDefined()
    })
    it("Initialize UserManagementModule()", () => {
        const module = TestBed.inject(UserManagementModule)
        expect(module).toBeDefined()
    })
    it("Initialize SharedModule()", () => {
        const module = TestBed.inject(SharedModule)
        expect(module).toBeDefined()
    })
    it("Initialize ResumeModule()", () => {
        const module = TestBed.inject(ResumeModule)
        expect(module).toBeDefined()
    })
    it("Initialize HomeModule()", () => {
        const module = TestBed.inject(HomeModule)
        expect(module).toBeDefined()
    })
    it("Initialize GuestBookModule()", () => {
        const module = TestBed.inject(GuestBookModule)
        expect(module).toBeDefined()
    })
    it("Initialize DonateModule()", () => {
        const module = TestBed.inject(DonateModule)
        expect(module).toBeDefined()
    })
    it("Initialize BlogModule()", () => {
        const module = TestBed.inject(BlogModule)
        expect(module).toBeDefined()
    })
    it("Initialize AuthModule()", () => {
        const module = TestBed.inject(AuthModule)
        expect(module).toBeDefined()
    })
    it("Initialize AboutModule()", () => {
        const module = TestBed.inject(AboutModule)
        expect(module).toBeDefined()
    })
})