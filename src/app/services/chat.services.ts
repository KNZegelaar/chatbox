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

  createChat(title: string, description: string) {
    return this.http.post<Chat>(this.apiURL + '/chat', {title, description}, this.headers);
  }

  updateChat(title: string, description: string, id: string) {
    return this.http.put<Chat>(this.apiURL + '/chat/' + id, {title, description}, this.headers);
  }

  deleteChat(id: string) {
    return this.http.delete<Chat>(this.apiURL + '/chat/' + id, this.headers);
  }

  getAllChats() {
    return this.http.get<any>(this.apiURL + '/chat', this.headers);
  }

  getMessagesByCheck(_id: string){
    return this.http.get<any>(this.apiURL + '/message/' + _id, this.headers);
  }

  getOneChat(_id: string){
    return this.http.get<any>(this.apiURL + '/chat/' + _id, this.headers);
  }
}
