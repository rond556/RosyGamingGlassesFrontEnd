import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemodalComponent } from './gamemodal.component';

describe('GamemodalComponent', () => {
  let component: GamemodalComponent;
  let fixture: ComponentFixture<GamemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
