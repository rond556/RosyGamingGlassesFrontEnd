import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout"
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';




import { HomeComponent } from './home/home.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { LoginComponent } from './login/login.component';
import { GamemodalComponent } from './gamemodal/gamemodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent,
    GameDisplayComponent,
    LoginComponent,
    GamemodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [],
  entryComponents: [GamemodalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
