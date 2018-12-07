import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderBottomComponent } from './site-header-bottom.component';

describe('SiteHeaderBottomComponent', () => {
  let component: SiteHeaderBottomComponent;
  let fixture: ComponentFixture<SiteHeaderBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHeaderBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
