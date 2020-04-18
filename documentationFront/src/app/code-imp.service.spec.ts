import { TestBed } from '@angular/core/testing';

import { CodeImpService } from './code-imp.service';

describe('CodeImpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeImpService = TestBed.get(CodeImpService);
    expect(service).toBeTruthy();
  });
});
