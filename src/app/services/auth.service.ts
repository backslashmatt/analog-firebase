import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private httpClient = inject(HttpClient);

  public login(email: string, password: string) {
    return this.httpClient.post('/api/v1/auth', { email, password });
  }
}
