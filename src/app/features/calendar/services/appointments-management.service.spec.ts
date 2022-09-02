import { TestBed } from '@angular/core/testing';

import { AppointmentsManagementService } from './appointments-management.service';

describe('AppointmentsManagementService', () => {
  let service: AppointmentsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
