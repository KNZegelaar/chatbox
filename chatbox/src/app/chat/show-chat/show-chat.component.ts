import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "./chat.model";

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.css'],
})
export class ShowChatComponent implements OnInit {
  @Input() chat: Chat;
  // chats: Chat[];


  constructor() {
    // this.showChats();
  }

  ngOnInit() {
  }

  // showChats(){
  //   this.chatService.getAllChats()
  //     .subscribe((response) => {
  //       for(let chat of response.chats){
  //         const username = chat.creator.username;
  //         chat.creator = username;
  //       }
  //       this.chats = response.chats;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //
  // }

}
