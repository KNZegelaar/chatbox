import { Component, OnInit } from '@angular/core';
import {Chat} from "../show-chat/chat.model";
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../services/chat.services";

@Component({
  selector: 'app-detailview-chat',
  templateUrl: './detailview-chat.component.html',
  styleUrls: ['./detailview-chat.component.css'],
  providers: [ChatService]
})
export class DetailviewChatComponent implements OnInit {
  chat: Chat;

  constructor(private chatService: ChatService, private route: ActivatedRoute) {
    this.getChat();
  }

  ngOnInit() {
  }

  getChat(){
    this.route.params.subscribe(param => {
      this.chatService.getOneChat(param['chatId'])
        .subscribe((response) => {
            const username = response.creator.username;
            response.creator = username;
            this.chat = response;
          },
          (error) => {
            console.log(error);
          }
        );
    });

  }

}
