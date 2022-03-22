import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService) {
    //console.log("This is login component!");
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;
console.log("login.component-username: "+username);
    this.authService.login(username, password).subscribe({
      next: data => {
console.log("login.component-data: "+JSON.stringify(data));        
        //this.tokenStorage.saveToken(data.accessToken);
        //this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
