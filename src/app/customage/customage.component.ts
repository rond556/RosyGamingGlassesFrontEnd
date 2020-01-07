import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-customage',
  templateUrl: './customage.component.html',
  styleUrls: ['./customage.component.css']
})
export class CustomageComponent implements OnInit {
  game: Game;
  response: any;
  games: Game[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.rawg.io/api/games?page_size=40')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.game = new Game(element.id, element.name, element.released, element.background_image);
          this.games.push(this.game);
        });
      });
  }

}
