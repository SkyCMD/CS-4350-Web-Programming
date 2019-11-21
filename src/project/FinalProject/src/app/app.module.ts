import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatButtonModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatListModule, MatMenuModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material'
import { ChartsModule } from 'ng2-charts';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { FormsModule } from '@angular/forms';


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
    MatInputModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
