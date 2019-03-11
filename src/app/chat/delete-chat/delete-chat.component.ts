import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../show-chat/chat.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChatService} from "../../services/chat.services";

@Component({
  selector: 'app-delete-chat',
  templateUrl: './delete-chat.component.html',
  styleUrls: ['./delete-chat.component.css']
})
export class DeleteChatComponent implements OnInit {
  @Input() chat: Chat;

  constructor(private modalService: NgbModal, private chatService: ChatService) {
  }

  open(content) {
    console.log(this.modalService);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: false}).result.then(() => {
      console.log("Modal opened");
     this.chatService.deleteChat(this.chat._id)
       .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
    });
  }

  ngOnInit() {
  }


}
