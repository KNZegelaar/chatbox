import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.services";
import {Router} from '@angular/router';

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
  errorcode: Number;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.authenticationService.register(this.singinForm.value.username, this.singinForm.value.email, this.singinForm.value.password)
      .subscribe(
        (response) => {
          this.router.navigate(['/chat']);
          localStorage.setItem("Token", response.token);
          this.errorcode = 200;
        },
        (error) => {
          console.log(error);
          this.errorcode = 420;
        }
      );
  }

}
