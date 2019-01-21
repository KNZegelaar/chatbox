import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.services";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [
    '../../app.component.css',
    './signin.component.css'],
  providers: [AuthenticationService]
})
export class SigninComponent implements OnInit {
  @ViewChild('f') singinForm: NgForm;
  errorcode: Number;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authenticationService.login(this.singinForm.value.username, this.singinForm.value.password)
      .subscribe(
        (response) => {
          console.log(response);
          sessionStorage.setItem("Token", response.token);
          sessionStorage.setItem("Username", this.singinForm.value.username);
          this.router.navigate(['/chat']);
          this.errorcode = 200;
        },
        (error) => {
          console.log(error);
          this.errorcode = error.code;
        }
      );
  }
}
