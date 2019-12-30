import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
