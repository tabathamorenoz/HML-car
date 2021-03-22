import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created',
    async(inject(
      [ApiService],
      (apiService: ApiService) => {
        expect(apiService).toBeTruthy();
      })));
});
