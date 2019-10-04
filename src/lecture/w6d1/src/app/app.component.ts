import { Component } from '@angular/core';
import { ISocketMessage } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message: string; //everything is public in javascript
  public allMessages:  ISocketMessage[] = [];
  private username: string;
  private io: {emit: (key: string, value: string) => void, on: (event: string, callback: (data) => void) => void};
  private isConnected = false; //knows it is implicity a boolean by value of false

  constructor() {

  }

  public addParticipantsMessage(data: ISocketMessage){

  }

  public sendMessage(){

  }

  public onKeyDown(event: KeyboardEvent){

  }
  
  public log(message:string, shouldPrepend?: boolean){

  }

  public addChatMessage(data: ISocketMessage){

  }

  public scrollToMessageTop(){

  }

  public getUsernameColor(username: string){

  }

  public inputMessageClick(event: MouseEvent){

  }

  private setUpListeners(){
    
  }

}
