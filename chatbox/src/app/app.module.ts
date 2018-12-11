import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ChatComponent } from './chat/chat.component';
import { CreateChatComponent } from './chat/create-chat/create-chat.component';
import { ShowChatComponent } from './chat/show-chat/show-chat.component';
import { AuthenticationGuard} from "./services/authenticationGuard.services";
import { AuthenticationService} from "./services/authentication.services";
import {HideLoginServices} from "./services/hideLogin.services";
import { DetailviewChatComponent } from './chat/detailview-chat/detailview-chat.component';


//TODO: canActivate: [true] --> this makes sure the page cannot be loaded when the user isn't logged in.
const appRoutes: Routes = [
  { path: '', component: SigninComponent, canActivate: [HideLoginServices]},
  { path: 'login', component: SigninComponent, canActivate: [HideLoginServices]},
  { path: 'register', component: SignupComponent, canActivate: [HideLoginServices] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    ChatComponent,
    CreateChatComponent,
    ShowChatComponent,
    DetailviewChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, AuthenticationGuard, HideLoginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
