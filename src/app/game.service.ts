import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: Http){
  }

  getGames(){
      return this.http.get('https://api.rawg.io/docs/games')
  }

}
