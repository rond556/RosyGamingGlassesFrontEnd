import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private rawpaiurl = 'https://api.rawg.io/docs/games';


  constructor() { }
}
