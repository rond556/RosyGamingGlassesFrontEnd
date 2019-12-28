import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  response: any;

  constructor(private http: HttpClient ){
  }
  title = 'NostalgiaGamingFrontEnd';

  ngOnInit(){
    this.http.get('https://api.rawg.io/api/games')
    .subscribe((response) => {
    this.response = response;
    console.log(response);
  })
}
}