import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenjiComponent } from './kenji.component';

describe('KenjiComponent', () => {
  let component: KenjiComponent;
  let fixture: ComponentFixture<KenjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenjiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
