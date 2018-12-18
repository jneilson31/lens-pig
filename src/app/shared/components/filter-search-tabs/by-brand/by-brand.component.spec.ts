import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBrandComponent } from './by-brand.component';

describe('ByBrandComponent', () => {
  let component: ByBrandComponent;
  let fixture: ComponentFixture<ByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
