import { Component, OnInit } from '@angular/core';
import { GamecardComponent } from '../gamecard/gamecard.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-elevenyearsold',
  templateUrl: './elevenyearsold.component.html',
  styleUrls: ['./elevenyearsold.component.css']
})
export class ElevenyearsoldComponent implements OnInit {

  response: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
