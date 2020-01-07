import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { map, tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  apiUrl: string = 'https://api.rawg.io/api/games?dates=';
  pageSize: string = '&page_size=40';

  constructor(private http: HttpClient) { }

  getGames(year: number): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl + year + '-01-01,' + year + '-12-31' + this.pageSize);
  }
}