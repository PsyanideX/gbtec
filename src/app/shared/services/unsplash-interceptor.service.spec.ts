import { TestBed } from '@angular/core/testing';

import { UnsplashInterceptorService } from './unsplash-interceptor.service';

describe('UnsplashInterceptorService', () => {
  let service: UnsplashInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
