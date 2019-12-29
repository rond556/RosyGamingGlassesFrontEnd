import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomageComponent } from './customage.component';

describe('CustomageComponent', () => {
  let component: CustomageComponent;
  let fixture: ComponentFixture<CustomageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
