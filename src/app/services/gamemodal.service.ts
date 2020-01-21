import { Injectable } from '@angular/core';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GamemodalService {
  gameId: number;
  apiUrl: string = 'https://api.rawg.io/api/games/';



  constructor(private http: HttpClient) {
    
  }

  getGame(gameId: number){
    return this.http.get('' + this.apiUrl + gameId);
  }

  getGameId(){
    return this.gameId;
  }

  setGameId(gameId: number){
    this.gameId = gameId
  }
}
