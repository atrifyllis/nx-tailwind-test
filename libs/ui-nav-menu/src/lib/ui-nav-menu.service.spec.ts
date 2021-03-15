import { TestBed } from '@angular/core/testing';

import { UiNavMenuService } from './ui-nav-menu.service';

describe('UiNavMenuService', () => {
  let service: UiNavMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiNavMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
