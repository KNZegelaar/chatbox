import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Chat} from "../chat/show-chat/chat.model";

@Injectable()
export class ChatService {
  private apiURL = 'https://protected-garden-83168.herokuapp.com/api';
  private headers = {headers: {'X-Access-Token': sessionStorage.getItem("Token")}};

  constructor(private http: HttpClient, private router: Router) {
  }

  createChat(title: String, description: String) {
    return this.http.post<Chat>(this.apiURL + '/chat', {title, description}, this.headers);
  }

  getAllChats() {
    return this.http.get<any>(this.apiURL + '/chat/all', this.headers);
  }

  getOneChat(_id: String){
    return this.http.get<any>(this.apiURL + '/chat/' + _id, this.headers);
  }

}
