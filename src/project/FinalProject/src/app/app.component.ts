import { Component } from '@angular/core';
import { getAdventureScore, getSocialScore } from './calculate-score'

export interface Players {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  social: number;
  rpg: number;
  immersive: number;
  hack: number;
  horror: number;
  survival: number;
  puzzle: number;
  strategy: number;
  humor: number;
  sports: number;
  rating: number;
  modern: number;
  title = 'FinalProject';
  players: Players[] = [
    { value: 1, viewValue: 'Solo' }, 
    { value: 5, viewValue: 'Coop with a buddy' }, 
    { value: 10, viewValue: 'Every game is a party (3 or more)' }
  ];
  scaleRPG: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleImmersive: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleHack: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleHorror: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleSurvival: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scalePuzzle: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleStrategy: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleHumor: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleSports: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleRating: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scaleModern: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  
}