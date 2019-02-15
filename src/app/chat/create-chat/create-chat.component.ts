import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, ViewChild} from '@angular/core';
import {ChatService} from "../../services/chat.services";
import {NgForm} from "@angular/forms";
import {Chat} from "../show-chat/chat.model";
import {getRawMessage} from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: [
    '../../app.component.css',
    './create-chat.component.css'],
  providers: [ChatService]
})
export class CreateChatComponent implements OnInit, OnChanges {
  @ViewChild('f') createChatForm: NgForm;
  @Output() chatCreated = new EventEmitter<void>();
  @Input() chat: Chat;

  hidden:boolean = true;
  type:string = 'create';

  buttonText:string;
  inputTitleText:string = '';
  inputDescriptionText:string = '';

  constructor(private chatService: ChatService){
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
   this.createBox();
  }

  createBox(){
    if (this.chat !== undefined) {
      this.type = 'edit';
    } else if(this.chat === undefined) {
      this.type = 'create';
    }

    if (this.type === 'create') {
      this.buttonText = 'Create a new chat';
      this.inputTitleText = '';
      this.inputDescriptionText = '';
    } else if (this.type === 'edit') {
      this.hidden = false;
      this.buttonText = 'Edit chat';
      this.inputTitleText = this.chat.title;
      this.inputDescriptionText = this.chat.description;
    }
  }

  ngOnInit() {
  }

  createOrUpdate(type: string){
    if (type === 'create'){
      this.Create();
    } else if (type === 'edit'){
      this.Edit();
    }
  }

  Create(){
    this.chatService.createChat(this.createChatForm.value.name, this.createChatForm.value.description)
      .subscribe(
        (response) => {
          this.hidden = true;
          this.chatCreated.emit();
        },
        (error) => console.log(error)
      );

  }

  Edit(){
    this.chatService.updateChat(this.createChatForm.value.name, this.createChatForm.value.description, this.chat._id)
      .subscribe(
        (response) => {
          this.hidden = true;
          this.chatCreated.emit();
        },
        (error) => console.log(error)
      );
  }

  show(){
    this.hidden = false;
  }

  close(){
    this.hidden = true;
    this.chat = undefined;
    this.createBox();
  }
}
