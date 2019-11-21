import { Component, OnInit } from '@angular/core';
import {  getAdventureScore, 
          getGorehoundScore, 
          getScientistScore, 
          getTrendyScore, 
          getSocialScore 
        } from '../calculate-score';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Adventurer','Gorehound','Scientist','Trendy','Social'];
  public radarChartType = 'radar';

  public radarChartData = [
    {data: [getAdventureScore(),
            getGorehoundScore(),
            getScientistScore(),
            getTrendyScore(),
            getSocialScore()], 
            label: 'Your Gamer Profile'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
