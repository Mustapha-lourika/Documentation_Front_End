import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarService, NbChatModule, NbChatMessageComponent, NbIconModule, NbCardModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AceEditorModule } from 'ng2-ace-editor';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BpmnComponent } from './bpmn/bpmn.component';
import { ProcessusComponent } from './processus/processus.component';
import { XsdComponent } from './xsd/xsd.component';
import { CodeImpComponent } from './code-imp/code-imp.component';
import { ChangeWidgetComponent } from './change-widget/change-widget.component';
import { CodeImpsService } from './code-imp.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat/chat.component';
import { WebSocketAPI } from './Webocket';
import { EditorComponent } from './editor/editor.component';
import { Chat2Component } from './chat2/chat2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardUserComponent,
    ProfileComponent,
    IntroductionComponent,
    NavbarComponent,
    BpmnComponent,
    ProcessusComponent,
    XsdComponent,
    CodeImpComponent,
    ChangeWidgetComponent,
    SidebarComponent,
    ChatComponent,
    EditorComponent,
    Chat2Component,
  ],
  imports: [
    BrowserModule,
    NbEvaIconsModule,
    NbCardModule,
    NbChatModule,
    AceEditorModule,
    MatIconModule,
    NbIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    FormsModule,
    HttpClientModule,

    MalihuScrollbarModule.forRoot(),
    NbThemeModule.forRoot()


  ],
  providers: [authInterceptorProviders,CodeImpsService,WebSocketAPI,NbSidebarService ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
