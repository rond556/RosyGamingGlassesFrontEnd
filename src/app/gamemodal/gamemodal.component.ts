import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GamemodalService } from '../services/gamemodal.service';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/models/game';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gamemodal',
  templateUrl: './gamemodal.component.html',
  styleUrls: ['./gamemodal.component.css']
})
export class GamemodalComponent implements OnInit {
  gameId: number;
  game: any;

  constructor(public gameModal: NgbActiveModal, private gameModalService: GamemodalService, private http: HttpClient) {
    this.gameModalService.getGame(gameModalService.getGameId()).subscribe(game => this.game = game);
  }

  ngOnInit() {
    var gameDescription = document.createElement( 'html' );
    gameDescription.innerHTML = this.game.description;
  }
}