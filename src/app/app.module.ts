import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout"
import { AgGridModule } from 'ag-grid-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './game.service';


import { HomeComponent } from './home/home.component';
import { CustomageComponent } from './customage/customage.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { UserpageComponent } from './userpage/userpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomageComponent,
    GamecardComponent,
    UserpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    AgGridModule.withComponents([])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
