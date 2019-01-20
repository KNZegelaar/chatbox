import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MessageService} from "../../services/message.services";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: [
    '../../app.component.css',
    './create-message.component.css'],
  providers: [MessageService]
})
export class CreateMessageComponent implements OnInit {
  @ViewChild('f') createChatForm: NgForm;
  @Output() messageCreated = new EventEmitter<void>();

  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCreate(){
    this.route.params.subscribe(param => {
      this.messageService.createMessage(this.createChatForm.value.content,param['chatId'])
        .subscribe(
          (response) => {
            this.messageCreated.emit();
          },
          (error) => console.log(error)
        );
    });

  }
}
