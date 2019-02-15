import {Component, OnInit} from '@angular/core';
import {Chat} from './show-chat/chat.model';
import {ChatService} from '../services/chat.services';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  chats: Chat[];
  chatEdit: Chat;

  constructor(private chatService: ChatService) {
    this.showChats()
  }

  ngOnInit() {
  }

  onChatUpdate(chat: Chat){
    this.chatEdit = chat;
  }

  onChatCreated(){
    this.showChats();
  }

  showChats(){
    this.chatService.getAllChats()
      .subscribe((response) => {
        for(let chat of response.chats){
          if(chat.creator.username === sessionStorage.getItem('Username')){
            chat.creator = 'you';
          } else{
            chat.creator = chat.creator.username;
          }
        }
        this.chats = response.chats;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
