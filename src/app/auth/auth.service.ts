import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  birthyear: number;
  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + "signup", registerPayload);
  
  }

  getBirthyear(){
    return this.birthyear;
  }

  setBirthyear(birthyear: number){
    this.birthyear = birthyear;
  }
}