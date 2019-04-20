import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: [
    '../../app.component.css',
    './show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  @ViewChild('f') messageContentForm: NgForm;
  @Input() message: Message;
  @Output() messageDelete = new EventEmitter<Message>();
  @Output() messageEdit = new EventEmitter<Message>();
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
    this.message.content = this.messageContentForm.value.messageEditContent;
    console.log(this.message);
    this.messageEdit.emit((this.message))
  }

  onEditCancel(){
    this.editMessage = false;
  }

  onDelete () {
    this.messageDelete.emit((this.message));
  }

}
