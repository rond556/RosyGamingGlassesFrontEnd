import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from '../services/apicall.service';
import { BehaviorSubject, pipe, Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { map } from 'rxjs/operators'; 


@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  games: Observable<Game[]>;
  game: Game;
  response: any;


  constructor(private http: HttpClient, private apicall: ApicallService, ) {
    this.apicall.getGames(1985).subscribe(games => this.games = games['results']);
    
   }

  ngOnInit() {
    
  }

  changeAge(year: number){
    this.apicall.getGames(year).subscribe(games => this.games = games['results']);
    }
}
