import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenyearsoldComponent } from './tenyearsold.component';

describe('TenyearsoldComponent', () => {
  let component: TenyearsoldComponent;
  let fixture: ComponentFixture<TenyearsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenyearsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenyearsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
