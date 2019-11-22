import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyRadarChartComponent implements OnInit {

  @Input() answers;

  constructor(
    private appComponent: AppComponent,
  ) {}

  getAdventureScore() {
    console.log('get adventure score', this.appComponent.getAdventureScore());
    return this.appComponent.getAdventureScore();
  }
  getGorehoundScore() {
    return this.appComponent.getGorehoundScore();
  }
  getScientistScore() {
    return this.appComponent.getScientistScore();
  }
  getTrendyScore() {
    return this.appComponent.getTrendyScore();
  }
  getSocialScore() {
    return this.appComponent.getSocialScore();
  }

  public radarChartLabels = ['Adventurer','Gorehound','Scientist','Trendy','Social'];
  public radarChartType = 'radar';

  getRadarChartData() {
    return [{
      data: [
        this.answers,
        this.getGorehoundScore(),
        this.getScientistScore(),
        this.getTrendyScore(),
        this.getSocialScore()
      ], 
      label: 'Your Gamer Profile'
    }];
  }

  ngOnInit() {
    console.log(this.answers)
  }
}
