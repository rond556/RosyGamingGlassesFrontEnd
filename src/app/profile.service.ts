import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './profile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl: string;

  constructor(private http: HttpClient) { 
    this.profileUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl);
  }
 
  public save(user: Profile) {
    return this.http.post<Profile>(this.profileUrl, user);
  }
}
