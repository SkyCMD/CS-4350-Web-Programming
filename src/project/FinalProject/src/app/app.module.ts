import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatButtonModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatListModule, MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material'
import { ChartsModule } from 'ng2-charts';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MyRadarChartComponent
  ],
  imports: [
    MatStepperModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
