import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  // Saber se está usando esse código abaixo:
  register(usuario : User): Observable<any> {
    return this.http.post(environment.apiUrl + '/user/register', usuario);
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/user/login', { email, senha });
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
