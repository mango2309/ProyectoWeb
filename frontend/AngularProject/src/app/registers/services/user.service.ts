import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from 'src/app/models/register-user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7034/api/usuarios';

  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(this.apiUrl, user);
  }
}
