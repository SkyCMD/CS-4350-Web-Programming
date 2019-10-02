import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private username: string;
  private io: {emit: (key: string, value: string) => void, on: (event: string, callback: (data) => void) => void};
}
