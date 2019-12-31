import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './game.service';

import { TenyearsoldComponent } from './tenyearsold/tenyearsold.component';
import { ElevenyearsoldComponent } from './elevenyearsold/elevenyearsold.component';
import { TwelveyearsoldComponent } from './twelveyearsold/twelveyearsold.component';
import { ThirteenyearsoldComponent } from './thirteenyearsold/thirteenyearsold.component';
import { FourteenyearsoldComponent } from './fourteenyearsold/fourteenyearsold.component';
import { HomeComponent } from './home/home.component';
import { CustomageComponent } from './customage/customage.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { UserpageComponent } from './userpage/userpage.component';


@NgModule({
  declarations: [
    AppComponent,
    TenyearsoldComponent,
    ElevenyearsoldComponent,
    TwelveyearsoldComponent,
    ThirteenyearsoldComponent,
    FourteenyearsoldComponent,
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
    FlexLayoutModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
