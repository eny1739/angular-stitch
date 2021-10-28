import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsmaComponent } from './brandsma.component';

describe('BrandsmaComponent', () => {
  let component: BrandsmaComponent;
  let fixture: ComponentFixture<BrandsmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
