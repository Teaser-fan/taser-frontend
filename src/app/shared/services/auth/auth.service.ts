import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TOKEN_KEY } from '../../constants/auth.constants';
import { IAuthService } from '../../interfaces/iauth-service';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private url: string;
  private _user: BehaviorSubject<User>;

  constructor(private _http: HttpClient) {
    const baseUrl: string = environment.baseUrl;
    const serviceName: string = 'auth';
    this.url = `${baseUrl}/${serviceName}`;
    this._user = new BehaviorSubject({} as User);
  }

  get user() {
    return this._user.value;
  }

  set user(updatedUser: User) {
    this._user.next(updatedUser);
  }

  public getUserObservable(): Observable<User> {
    return this._user.asObservable();
  }

  public login(email: string, password: string): Promise<void> {
    return this._http
      .post<void>(`${this.url}/login`, {
        email,
        password,
      })
      .toPromise();
  }

  public setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  public logout(): void {
    localStorage.clear();
  }
}
