import { TestBed } from '@angular/core/testing';

import { SubjectHandlerService } from './subject-handler.service';

describe('SubjectHandlerService', () => {
  let service: SubjectHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
