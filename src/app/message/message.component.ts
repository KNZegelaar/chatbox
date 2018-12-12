import { Component, OnInit } from '@angular/core';
import {Message} from "./message.model";
import {ChatService} from "../services/chat.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [ChatService]
})
export class MessageComponent implements OnInit {
  messages: Message[];
  constructor(private chatService: ChatService, private route: ActivatedRoute) {
    this.showMessages();
  }

  ngOnInit() {
  }


  onMessageCreated(){
    this.showMessages();
  }

  showMessages(){
    this.route.params.subscribe(param => {
      this.chatService.getOneChat(param['chatId'])
        .subscribe((response) => {
              console.log(response.messages);
              for(let message of response.messages){
                const date = new Date(message.timeStamp);
                message.timeStamp = date.toDateString() + " at " + date.toLocaleTimeString();
              }
              this.messages = response.messages;
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

}
