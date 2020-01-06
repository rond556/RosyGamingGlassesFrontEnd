import { Component, OnInit } from '@angular/core';
import { GamecardComponent } from 'src/app/gamecard/gamecard.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elevenyearsold',
  templateUrl: './elevenyearsold.component.html',
  styleUrls: ['./elevenyearsold.component.css']
})
export class ElevenyearsoldComponent implements OnInit {
  response: any;
  gamecard: GamecardComponent;
  gamecards: GamecardComponent[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.rawg.io/api/games?dates=1996-01-01,1996-12-31&page_size=40')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }
}
