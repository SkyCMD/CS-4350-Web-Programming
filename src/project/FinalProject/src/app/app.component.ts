import { Component } from '@angular/core';

export interface Players {
  value: number;
  viewValue: string;
}

export interface Games {
  adventure: string;
  gorehound: string;
  scientist: string;
  trendy: string;
  gregarious: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    let score = this.answers[1]*1.3 + this.answers[2]*0.5 + this.answers[3]*0.3 + this.answers[7] * 0.3;
    return score;
  }

  getGorehoundScore(): number {
    let score =this.answers[3]*0.7 + this.answers[4] + this.answers[5]*0.7;
    return score;
  }

  getScientistScore(): number {
    let score = this.answers[5]*.3 + this.answers[6]*1.4 + this.answers[7]*0.7;
    return score;
  }

  getTrendyScore(): number {
    let score = this.answers[10]*1.1 + this.answers[11]*.8 + this.answers[8]*.5;
    return score;
  }

  getSocialScore(): number {
    let score = this.answers[0]*1.2 + this.answers[9]*.5 + this.answers[11]*0.2 + this.answers[8]*.5;
    return score;
  }

  public async loadAdventureData(url: string): Promise<Games[]> {
    const response = await fetch(url);
    const json = await response.json();
    return json as Games[];
  }
}

