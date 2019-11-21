import { Component } from '@angular/core';

export interface Players {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
}

export class SelectPlayers {
  players: Players[] = [
    {value: 'solo-0', viewValue: 'Solo'},
    {value: 'coop-1', viewValue: 'Coop with a buddy'},
    {value: 'group-2', viewValue: 'Every game is a party (3 or more)'}
  ];
}

export class RadioRPG {
  selectedScale: number;
  scales: number[] = [1,2,3,4,5,6,7,8,9,10];
}

function getAdventureScore(): number {
  
  return 0;
}