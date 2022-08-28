import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }
}
