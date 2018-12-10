import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService{
  private apiURL = 'http://localhost:27018/api';

  constructor(private http: HttpClient, private router: Router){}

  register(username: String, email: String, password: String){
    console.log("Register: " + username + " has been registered");
    this.http.post<any>(this.apiURL + '/register', {username: username, email: email, password: password})
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
          localStorage.setItem("Token", response.token);
        },
        (error) => console.log(error)
      );
  }

  login(username: String, password: String){
    console.log("Login: " + username + " has been logged in");
    this.http.post<any>(this.apiURL + '/login', {username: username, password: password})
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
          localStorage.setItem("Token", response.token);
        },
        (error) => console.log(error)
      );
  }

  logout(){
    localStorage.removeItem("Token")
  }

  getToken(){
    return localStorage.getItem("Token");
  }

  isAuthenticated(){
    return localStorage.getItem("Token") != null;
  }
}
