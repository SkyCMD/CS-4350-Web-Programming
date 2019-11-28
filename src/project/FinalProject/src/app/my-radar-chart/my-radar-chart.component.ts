import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyRadarChartComponent implements OnInit {

  @Input() adventureScore: number;
  @Input() gorehoundScore: number;
  @Input() scientistScore: number;
  @Input() trendyScore: number;
  @Input() socialScore: number;

  responsive: true;
  maintainAspectRatio: false;

  constructor(
    private appComponent: AppComponent,
  ) {}

  public radarChartLabels = ['Adventurer','Gorehound','Scientist','Trendy','Gregarious'];
  public radarChartType = 'radar';

  getRadarChartData() {
    return [{
      data: [
        this.adventureScore,
        this.gorehoundScore,
        this.scientistScore,
        this.trendyScore,
        this.socialScore
      ], 
      label: 'Your Gamer Profile'
    }];
  }

  ngOnInit() {
    
  }
}
