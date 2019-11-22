import { Component } from '@angular/core';
import { getAdventureScore, getSocialScore } from './calculate-score'
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

export interface Players {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  answers = Array(12);

  setAnswer(index, answer) {
    this.answers = [...this.answers];
    this.answers[index] = answer;
  }

  getAnswers(): number[] {
    return this.answers;
  }

  getAdventureScore(): number {
    let score = this.answers[0];
    return score;
  }

  getGorehoundScore(): number {
    let score = this.answers[1];
    return score;
  }

  getScientistScore(): number {
    let score = this.answers[2];
    return score;
  }

  getTrendyScore(): number {
    let score = this.answers[3];
    return score;
  }

  getSocialScore(): number {
    let score = this.answers[4];
    return score;
  }
  
}