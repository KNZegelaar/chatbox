import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Chat} from "../chat/show-chat/chat.model";

@Injectable()
export class ChatService {
  private apiURL = 'http://localhost:27018/api';
  private headers = {headers: {'X-Access-Token': localStorage.getItem("Token")}};

  constructor(private http: HttpClient, private router: Router) {
  }

  createChat(title: String, description: String) {
    this.http.post<Chat>(this.apiURL + '/chat', {title, description}, this.headers)
      .subscribe(
        (response) => {
          console.log("CHAT:" + response);
        },
        (error) => console.log(error)
      );
  }

  getAllChats() {
    return this.http.get<any>(this.apiURL + '/chat/all', this.headers);
  }

}
