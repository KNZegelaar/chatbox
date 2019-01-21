import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService{
  private apiURL = 'https://protected-garden-83168.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router){}

  register(username: String, email: String, password: String){
    return this.http.post<any>(this.apiURL + '/register', {username: username, email: email, password: password});
  }

  login(username: String, password: String){
    return this.http.post<any>(this.apiURL + '/login', {username: username, password: password});
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  isAuthenticated(){
    return sessionStorage.getItem("Token") != null;
  }
}
