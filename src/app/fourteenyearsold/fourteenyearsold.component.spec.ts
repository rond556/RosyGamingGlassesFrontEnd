import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenyearsoldComponent } from './fourteenyearsold.component';

describe('FourteenyearsoldComponent', () => {
  let component: FourteenyearsoldComponent;
  let fixture: ComponentFixture<FourteenyearsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourteenyearsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourteenyearsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
