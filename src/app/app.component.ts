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
  }


}
