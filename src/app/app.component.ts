import { Component } from '@angular/core';
import { GamecardComponent } from 'src/app/gamecard/gamecard.component';
import { HttpClient } from '@angular/common/http';
import { jsonpFactory } from '@angular/http/src/http_module';
import { Game } from 'src/models/Game';
import { Observable } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamecard: GamecardComponent;
  response: any;

  constructor(private http: HttpClient) {
  }
  title = 'NostalgiaGamingFrontEnd';

  ngOnInit() {
    this.http.get('https://api.rawg.io/api/games')
      .subscribe((response) => {
        this.response = response['results'];
        console.log(this.response);

        
        this.response.forEach(element => {console.log(element.name)
        });
          
        });
      }
  }
