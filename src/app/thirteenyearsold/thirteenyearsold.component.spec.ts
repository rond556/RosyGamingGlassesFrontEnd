import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenyearsoldComponent } from './thirteenyearsold.component';

describe('ThirteenyearsoldComponent', () => {
  let component: ThirteenyearsoldComponent;
  let fixture: ComponentFixture<ThirteenyearsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirteenyearsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirteenyearsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
