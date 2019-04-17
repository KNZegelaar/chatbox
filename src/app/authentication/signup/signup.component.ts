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
  @ViewChild('f') singupForm: NgForm;
  errorcode: Number;
  showLoadingGif: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.showLoadingGif = true;
    this.authenticationService.register(this.singupForm.value.username, this.singupForm.value.email, this.singupForm.value.password)
      .subscribe(
        (response) => {
          sessionStorage.setItem("Token", response.token);
          sessionStorage.setItem("Username", this.singupForm.value.username);
          this.showLoadingGif = false;
          this.router.navigate(['/chat']);
          this.errorcode = 200;
        },
        (error) => {
          console.log(error);
          this.showLoadingGif = false;
          this.errorcode = 420;
        }
      );
  }

}
