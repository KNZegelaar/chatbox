import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Message} from "../message/message.model";

@Injectable()
export class MessageService {
  private apiURL = 'https://protected-garden-83168.herokuapp.com/api';
  private headers = {headers: {'X-Access-Token': localStorage.getItem("Token")}};

  constructor(private http: HttpClient, private router: Router) {
  }

  createMessage(content: String, chatId: String) {
    return this.http.post<Message>(this.apiURL + '/message/' + chatId, {content}, this.headers)
  }
}
