import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl: string;

  constructor(private http: HttpClient) { 
    this.profileUrl = 'http://localhost:8080/profiles';
  }
 
  register(profile: Profile) {
    return this.http.post<Profile>(this.profileUrl, profile);
  }
}
