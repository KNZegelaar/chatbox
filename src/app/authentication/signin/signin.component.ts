import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthenticationService} from "../../services/authentication.services";
import { NgForm } from "@angular/forms";

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

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  onLogin(){
    this.authenticationService.login(this.singinForm.value.username, this.singinForm.value.password);
  }

}
