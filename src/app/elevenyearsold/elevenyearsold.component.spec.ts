import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenyearsoldComponent } from './elevenyearsold.component';

describe('ElevenyearsoldComponent', () => {
  let component: ElevenyearsoldComponent;
  let fixture: ComponentFixture<ElevenyearsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevenyearsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenyearsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
