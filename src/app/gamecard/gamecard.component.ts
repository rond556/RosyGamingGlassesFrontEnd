import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/models/Game';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {
  game: Game;
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() { 
  }

  parseGame(result) {
    this.game = new Game();
    this.game.title = result.name;
    this.game.publisher = result.publisher;
    this.game.released = result.released;
    this.game.image = result.background_image;
  }

}
