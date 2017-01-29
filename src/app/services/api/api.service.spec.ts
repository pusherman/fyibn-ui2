/* tslint:disable:no-unused-variable */

import { async, inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
