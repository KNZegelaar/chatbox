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
import { MessageComponent } from './message/message.component';
import { CreateMessageComponent } from './message/create-message/create-message.component';
import { ShowMessageComponent } from './message/show-message/show-message.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from "./services/message.services";


//TODO: canActivate: [true] --> this makes sure the page cannot be loaded when the user isn't logged in.
const appRoutes: Routes = [
  { path: '', component: SigninComponent, canActivate: [HideLoginServices]},
  { path: 'login', component: SigninComponent, canActivate: [HideLoginServices]},
  { path: 'register', component: SignupComponent, canActivate: [HideLoginServices] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthenticationGuard]},
  { path: 'chat/detail/:chatId', component: DetailviewChatComponent, canActivate: [AuthenticationGuard]},
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
    DetailviewChatComponent,
    MessageComponent,
    CreateMessageComponent,
    ShowMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, AuthenticationGuard, HideLoginServices, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
