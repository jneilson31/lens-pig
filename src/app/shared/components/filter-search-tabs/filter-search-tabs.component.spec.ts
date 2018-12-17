import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchTabsComponent } from './filter-search-tabs.component';

describe('FilterSearchTabsComponent', () => {
  let component: FilterSearchTabsComponent;
  let fixture: ComponentFixture<FilterSearchTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSearchTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSearchTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
