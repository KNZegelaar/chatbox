import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.services";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthenticationService]
})
export class NavigationComponent implements OnInit {
  @Input() title: String;
  username = sessionStorage.getItem("Username");


  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
