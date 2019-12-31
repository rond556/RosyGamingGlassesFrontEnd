import { Component } from '@angular/core';
import { GamecardComponent } from 'src/app/gamecard/gamecard.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamecard: GamecardComponent;
  response: any;
  gamecards: GamecardComponent[] = [];

  constructor(private http: HttpClient) {
  }
  title = 'NostalgiaGamingFrontEnd';

  ngOnInit() {
    this.http.get('https://api.rawg.io/api/games')
      .subscribe((response) => {
        this.response = response['results'];
        console.log(this.response);

        
        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
          console.log(this.gamecards);
        });
      }
  }
