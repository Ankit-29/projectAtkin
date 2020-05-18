import { TestBed, async, inject } from '@angular/core/testing';

import { LoginScreenGuard } from './login-screen.guard';

describe('LoginScreenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginScreenGuard]
    });
  });

  it('should ...', inject([LoginScreenGuard], (guard: LoginScreenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
