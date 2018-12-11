import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../services/chat.services";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: [
    './create-chat.component.css'],
  providers: [ChatService]
})
export class CreateChatComponent implements OnInit {
  @ViewChild('f') createChatForm: NgForm;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onCreate(){
    this.chatService.createChat(this.createChatForm.value.name, this.createChatForm.value.description);
  }

}
