import { Injectable } from '@angular/core';
import { Profile } from 'src/models/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  birthyear: number;

  constructor() { }

  public login(userInfo: Profile){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  getBirthyear(){
    return this.birthyear;
  }

  setBirthyear(birthyear: number){
    this.birthyear = birthyear;
  }
}