import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Adventurer','Gorehound','Scientist','Trendy','Social'];
  public radarChartType = 'radar';

  public radarChartData = [
    {data: [6,5,4,2.5,5], label: 'Label A'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
