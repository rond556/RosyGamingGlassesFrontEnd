import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {
  id: number;
  title: string;
  releasedate: string;
  image: string;

  constructor(id: number, title: string, releasedate: string, image: string) { }

  ngOnInit() { 
  }


}
