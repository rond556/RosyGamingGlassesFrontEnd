import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout"
import { AgGridModule } from 'ag-grid-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { CustomageComponent } from './customage/customage.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TenyearsoldComponent } from './tenyearsold/tenyearsold.component';
import { ElevenyearsoldComponent } from './elevenyearsold/elevenyearsold.component';
import { TwelveyearsoldComponent } from './twelveyearsold/twelveyearsold.component';
import { ThirteenyearsoldComponent } from './thirteenyearsold/thirteenyearsold.component';
import { FourteenyearsoldComponent } from './fourteenyearsold/fourteenyearsold.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomageComponent,
    GamecardComponent,
    UserpageComponent,
    TenyearsoldComponent,
    ElevenyearsoldComponent,
    TwelveyearsoldComponent,
    ThirteenyearsoldComponent,
    FourteenyearsoldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
