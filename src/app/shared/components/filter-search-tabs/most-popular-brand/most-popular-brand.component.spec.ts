import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularBrandComponent } from './most-popular-brand.component';

describe('MostPopularBrandComponent', () => {
  let component: MostPopularBrandComponent;
  let fixture: ComponentFixture<MostPopularBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
