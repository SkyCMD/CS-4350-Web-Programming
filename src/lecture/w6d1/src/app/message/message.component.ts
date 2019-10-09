import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ISocketMessage } from '../interfaces';

@Component({
  selector: '[app-message]',
  templateUrl: './message.component.html',
  styles: [`
    .username {
      font-weight: 700;
      overflow: hidden;
      padding-right: 15px;
      text-align: right;
    }
  `]
})
export class MessageComponent implements OnInit {
  @Input('app-message') public appMessage: ISocketMessage;
  @HostBinding('class.log') public isLog: boolean;
  @HostBinding('class.message') public isMessage: boolean;
  public message: string;
  public color: string;
  public username: string;

  constructor() { }

  public ngOnInit() { //should have 'everything' good to go by ngOnInIt
    this.isLog = this.appMessage.isLog;
    this.isMessage = !this.appMessage.isLog;
    this.color = this.appMessage.color;
    this.message = this.appMessage.message;
    this.username = this.appMessage.username;
  }

}
