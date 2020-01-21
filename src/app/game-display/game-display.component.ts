import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GamemodalComponent } from '../gamemodal/gamemodal.component';
import { GamemodalService } from '../services/gamemodal.service';
import { Game } from 'src/models/game';
import { ApicallService } from '../services/apicall.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  birthyear: number;
  games: Observable<Game[]>;
  game: Game;


  constructor(private http: HttpClient,
    private apicall: ApicallService,
    private authService: AuthService,
    private modalService: NgbModal,
    private gameModalService: GamemodalService) {
    this.apicall.getGames(this.authService.getBirthyear()).subscribe(games => this.games = games['results']);
   
  }

  ngOnInit() {
    this.birthyear = this.authService.getBirthyear()

  }

  changeAge(year: number){
    this.apicall.getGames(year).subscribe(games => this.games = games['results']);
    }

  open(gameId: number){
    this.gameModalService.setGameId(gameId);
    this.modalService.open(GamemodalComponent);
  }
}

