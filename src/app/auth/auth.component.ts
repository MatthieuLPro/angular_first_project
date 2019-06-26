import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})

export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
  	this.authService.signIn().then(
  		() => {
  			this.authStatus = this.authService.isAuth;
        console.log('Sign in Successfull!');
        console.log('authStatus: ' + this.authStatus);
        this.router.navigate(['appareils']);
  		}
  	);
  }

  onSignOut() {
  	this.authService.signOut();
  	this.authStatus = this.authService.isAuth;
    console.log('Sign out Successfull!');
    console.log('authStatus: ' + this.authStatus);
  }

}
