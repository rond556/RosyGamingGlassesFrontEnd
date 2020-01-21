import { TestBed } from '@angular/core/testing';
import { GamemodalService } from './gamemodal.service';


describe('GamemodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamemodalService = TestBed.get(GamemodalService);
    expect(service).toBeTruthy();
  });
});
