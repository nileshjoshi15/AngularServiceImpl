import { TestBed } from '@angular/core/testing';

import { BuildInfoService } from './build-info.service';

describe('BuildInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildInfoService = TestBed.get(BuildInfoService);
    expect(service).toBeTruthy();
  });
});
