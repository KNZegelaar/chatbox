import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.services";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    '../../app.component.css',
    './signup.component.css'],
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {
  @ViewChild('f') singinForm: NgForm;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onRegister(){
    this.authenticationService.register(this.singinForm.value.username, this.singinForm.value.email, this.singinForm.value.password);
  }

}
