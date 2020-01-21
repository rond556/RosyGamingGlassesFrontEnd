import { Injectable } from '@angular/core';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/models/game';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamemodalService {
  gameId: number;
  apiUrl: string = 'https://api.rawg.io/api/games/';
  screenshots: string = '/suggested'



  constructor(private http: HttpClient) {
    
  }

  getGame(gameId: number){
    return this.http.get('' + this.apiUrl + gameId);
  }

  getSimilarGames(gameId: number): Observable<Game[]>{
    return this.http.get<Game[]>('' + this.apiUrl + gameId + this.screenshots);
  }

  getGameId(){
    return this.gameId;
  }

  setGameId(gameId: number){
    this.gameId = gameId
  }
}
