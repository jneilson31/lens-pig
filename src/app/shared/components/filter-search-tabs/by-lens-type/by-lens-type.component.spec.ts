import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLensTypeComponent } from './by-lens-type.component';

describe('ByLensTypeComponent', () => {
  let component: ByLensTypeComponent;
  let fixture: ComponentFixture<ByLensTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByLensTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLensTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
