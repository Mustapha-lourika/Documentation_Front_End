import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
 const USER_KEY="auth-user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  path:string

  isEditorHer=(this.rout.routerState.snapshot.url=="/editor");

  constructor(private routactive:ActivatedRoute,private rout:Router,private tokenStorageService: TokenStorageService) {
    this.isLoggedIn=(sessionStorage.getItem(USER_KEY)!=null);
    this.isEditorHer=(this.rout.routerState.snapshot.url=="/editor");
    console.log(this.path);

   }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.routactive.url.subscribe(url=>this.path=url[0].path)
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  tes(){
    return !(this.rout.routerState.snapshot.url=="/editor")

  }
}
