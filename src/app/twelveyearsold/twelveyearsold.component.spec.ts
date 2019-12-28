import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveyearsoldComponent } from './twelveyearsold.component';

describe('TwelveyearsoldComponent', () => {
  let component: TwelveyearsoldComponent;
  let fixture: ComponentFixture<TwelveyearsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveyearsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveyearsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
