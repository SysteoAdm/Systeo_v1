import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  // Saber se está usando esse código abaixo:
  register(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5261/api/Auth/register', { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', { email, password });
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
