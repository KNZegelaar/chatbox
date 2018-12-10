import { Component, OnInit } from '@angular/core';
import {Chat} from "./chat.model";

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.css']
})
export class ShowChatComponent implements OnInit {
  chats: Chat[] = [
    new Chat("Chat 1", "Username 1" , " This is the description of chat 1"),
    new Chat("Chat 2", "Username 2" , " This is the description of chat 2"),
    new Chat("Chat 3", "Username 3" , " This is the description of chat 3"),
    new Chat("Chat 4", "Username 4" , " This is the description of chat 4"),
    new Chat("Chat 5", "Username 5" , " This is the description of chat 5")
  ];


  constructor() { }

  ngOnInit() {
  }

}
