import { Component, OnInit } from '@angular/core';
import {Chat} from "./chat.model";
import {ChatService} from "../../services/chat.services";

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.css'],
  providers: [ChatService]
})
export class ShowChatComponent implements OnInit {
  chats: Chat[];


  constructor(private chatService: ChatService) {
    this.showChats();
  }

  ngOnInit() {
  }

  showChats(){
    this.chatService.getAllChats()
      .subscribe((response) => {
        for(let chat of response.chats){
          const username = chat.creator.username;
          chat.creator = username;
        }
        this.chats = response.chats;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
