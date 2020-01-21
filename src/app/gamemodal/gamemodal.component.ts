import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GamemodalService } from '../services/gamemodal.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-gamemodal',
  templateUrl: './gamemodal.component.html',
  styleUrls: ['./gamemodal.component.css']
})
export class GamemodalComponent implements OnInit {
  gameId: number;
  game: any;
  similarGames: Observable<Game[]>;


  constructor(public gameModal: NgbActiveModal,
    private gameModalService: GamemodalService,
    private http: HttpClient,
    private modalService: NgbModal) {
    this.gameModalService.getGame(gameModalService.getGameId()).subscribe(game => this.game = game);
    this.gameModalService.getSimilarGames(gameModalService.getGameId()).subscribe(games => this.similarGames = games['results']);
    }

  ngOnInit() {
  }

  open(gameId: number){
    this.gameModalService.setGameId(gameId);
    this.modalService.open(GamemodalComponent);
  }

  close(){
    this.modalService.dismissAll();
  }
}