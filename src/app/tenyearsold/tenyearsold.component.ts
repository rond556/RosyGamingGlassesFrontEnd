import { Component, OnInit } from '@angular/core';
import { GamecardComponent } from 'src/app/gamecard/gamecard.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tenyearsold',
  templateUrl: './tenyearsold.component.html',
  styleUrls: ['./tenyearsold.component.css']
})
export class TenyearsoldComponent implements OnInit {
  gamecard: GamecardComponent;
  response: any;
  gamecards: GamecardComponent[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.rawg.io/api/games?dates=1995-01-01,1995-12-31&page_size=40')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }

}
