import { Observable } from "rxjs";
import { User } from "./user";

export interface IAuthService {
  login(email: string, password: string): Promise<void>;
  setToken(token: string): void;
  getToken(): string;
  getUserObservable(): Observable<User>;
  logout(): void;
}
