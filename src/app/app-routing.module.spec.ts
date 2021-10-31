import { Location } from "@angular/common";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";

describe("App Routing Module", () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]),
            AppRoutingModule
        ]
        })
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(HomeComponent);
        router.initialNavigation();
    })


    // it('Navigate to "/" get HomeComponent', fakeAsync(() => {
    //     router.navigate(["/"]).then(() => {
    //         tick(100);
    //         expect(location.path()).toBe("");
    //     })
    // }))

    // it('Navigate to "/resume/kenji" get KenjiComponent', fakeAsync(() => {
    //     router.navigate(["/resume/kenji"]).then(() => {
    //         tick(100);
    //         expect(location.path()).toBe("/resume/kenji");
    //     })
    // }))

    // it('Navigate to "/resume/brandsma" get BrandsmaComponent', fakeAsync(() => {
    //     router.navigate(["/resume/brandsma"]).then(() => {
    //         tick(100);
    //         expect(location.path()).toBe("/resume/brandsma");
    //     })
    // }))

})