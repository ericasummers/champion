import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['dashboard']);
        }
      }
    );
   }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['dashboard']);
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
