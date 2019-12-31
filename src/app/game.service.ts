import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  response:any;

  private URL: 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient ){
  }

  getGames() {
  }

}
