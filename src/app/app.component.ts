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


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
          console.log(this.gamecards);
        });
      });
  }

  tenYearsOld(): void {
    this.clearBox('#cardgrid');
    this.response = [];
    this.http.get('https://api.rawg.io/api/games?dates=1995-10-30,1996-10-29')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }

  elevenYearsOld(): void {
    this.http.get('https://api.rawg.io/api/games?dates=1996-10-30,1997-10-29')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }

  twelveYearsOld(): void {
    this.http.get('https://api.rawg.io/api/games?dates=1997-10-30,1998-10-29')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }

  thirteenYearsOld(): void {
    this.http.get('https://api.rawg.io/api/games?dates=1998-10-30,1999-10-29')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }

  fourteenYearsOld(): void {
    this.http.get('https://api.rawg.io/api/games?dates=1999-10-30,2000-10-29')
      .subscribe((response) => {
        this.response = response['results'];


        this.response.forEach(element => {
          this.gamecard = new GamecardComponent(element.id, element.name, element.released, element.background_image);
          this.gamecards.push(this.gamecard);
        });
      });
  }
  clearBox(elementID)
  {
      document.getElementById(elementID).innerHTML = "";
  }
}
