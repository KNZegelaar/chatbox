import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message} from "../message/message.model";

@Injectable()
export class MessageService {
  private apiURL = 'https://protected-garden-83168.herokuapp.com/api';
  private headers = {headers: {'X-Access-Token': sessionStorage.getItem("Token")}};

  constructor(private http: HttpClient) {
  }

  createMessage(content: string, chatId: string) {
    return this.http.post<Message>(this.apiURL + '/message/' + chatId, {content}, this.headers)
  }

  deleteMessage(messageId: string) {
    return this.http.delete<Message>(this.apiURL + '/message/' + messageId, this.headers)
  }
}
