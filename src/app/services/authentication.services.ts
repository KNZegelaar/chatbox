import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService{
  private apiURL = 'https://protected-garden-83168.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router){}

  register(username: String, email: String, password: String){
    this.http.post<any>(this.apiURL + '/register', {username: username, email: email, password: password})
      .subscribe(
        (response) => {
          this.router.navigate(['/chat']);
          localStorage.setItem("Token", response.token);
          return 200;
        },
        (error) => {
          console.log(error);
          return 420;
        }
      );

    return 420;
  }

  login(username: String, password: String){
    this.http.post<any>(this.apiURL + '/login', {username: username, password: password})
      .subscribe(
        (response) => {
          this.router.navigate(['/chat']);
          localStorage.setItem("Token", response.token);
          return 200;
        },
        (error) => {
          console.log(error);
          return error.code;
        }
      );
    return 401;
  }

  logout(){
    localStorage.removeItem("Token")
    this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem("Token");
  }

  isAuthenticated(){
    return localStorage.getItem("Token") != null;
  }
}
