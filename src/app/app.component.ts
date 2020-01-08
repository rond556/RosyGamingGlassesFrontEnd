import { Component } from '@angular/core';
import { Profile } from 'src/models/profile';
 
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
currentProfile: Profile;
 
constructor( ) {
}
 
}