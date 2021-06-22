import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsersService } from '../../interfaces/iusers-service';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements IUsersService {
  private url: string;

  constructor(private _http: HttpClient) {
    const baseUrl: string = environment.baseUrl;
    const serviceName: string = 'users';
    this.url = `${baseUrl}/${serviceName}`;
  }

  public registerUser(newUser: User): Promise<void> {
    return this._http.post<void>(this.url, newUser).toPromise();
  }

  public getUserDetails(userId: string): Promise<User> {
    return this._http.get<User>(`${this.url}/${userId}`).toPromise();
  }

  public updateUser(userId: string, updatedUser: User): Promise<void> {
    return this._http
      .patch<void>(`${this.url}/${userId}`, updatedUser)
      .toPromise();
  }
}
