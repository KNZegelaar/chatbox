import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "./chat.model";

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: [
    '../../app.component.css',
    './show-chat.component.css'],
})
export class ShowChatComponent implements OnInit {
  @Input() chat: Chat;

  constructor() {
  }

  ngOnInit() {
  }

}
