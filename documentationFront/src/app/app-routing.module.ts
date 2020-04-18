import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BpmnComponent } from './bpmn/bpmn.component';
import { ProcessusComponent } from './processus/processus.component';
import { XsdComponent } from './xsd/xsd.component';
import { CodeImpComponent } from './code-imp/code-imp.component';
import { ChangeWidgetComponent } from './change-widget/change-widget.component';
import { ChatComponent } from './chat/chat.component';
import { PermissionService } from './permission.service';
import { EditorComponent } from './editor/editor.component';
import { Chat2Component } from './chat2/chat2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent ,canActivate:[PermissionService]},

  { path: 'login', component: LoginComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'editor', component: EditorComponent,canActivate:[PermissionService]},
  { path: 'chat2', component: Chat2Component,canActivate:[PermissionService]},

  {path:'widget',component:CodeImpComponent,canActivate:[PermissionService]},
  {path:'changeCode/:id',component:ChangeWidgetComponent,canActivate:[PermissionService]},
  { path: 'xsd', component: XsdComponent,canActivate:[PermissionService] },
  { path: 'processus', component: ProcessusComponent, canActivate:[PermissionService]},
  {path:'bpmn',component:BpmnComponent,canActivate:[PermissionService]},
  { path: 'register', component:RegisterComponent,canActivate:[PermissionService]},
 // { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent,canActivate:[PermissionService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
