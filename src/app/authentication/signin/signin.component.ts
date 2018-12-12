import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.services";
import {NgForm} from "@angular/forms";

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

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.errorcode = this.authenticationService.login(this.singinForm.value.username, this.singinForm.value.password);
    console.log(this.errorcode);
  }
}
