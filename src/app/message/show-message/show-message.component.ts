import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: [
    '../../app.component.css',
    './show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  @Input() message: Message;
  @Output() messageDelete = new EventEmitter<Message>();
  editMessage: boolean = false;
  deleteClassValue: string = "";

  constructor() { }

  ngOnInit() {
    if (this.message.content === 'This message has been deleted') {
      this.deleteClassValue = "deletedMessage";
    }
  }

  startEdit() {
    this.editMessage = true;
  }


  onEdit() {
    this.editMessage = false;
  }

  onDelete () {
    this.messageDelete.emit((this.message));
  }

}
