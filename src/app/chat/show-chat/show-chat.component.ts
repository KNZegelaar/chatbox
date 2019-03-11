import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() chatUpdate = new EventEmitter<Chat>();
  @Output() chatDelete = new EventEmitter<Chat>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit () {
    this.chatUpdate.emit(this.chat);
  }

  onDelete () {
    this.chatDelete.emit((this.chat));
  }


}
