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
      this.chatService.getMessagesByCheck(param['chatId'])
        .subscribe((response) => {
            for(let message of response.Messages){
              if(message.user.username === sessionStorage.getItem('Username')){
                message.user = 'you';
              } else{
                message.user = message.user.username;

              }
            }
              this.messages = response.Messages;
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

}
