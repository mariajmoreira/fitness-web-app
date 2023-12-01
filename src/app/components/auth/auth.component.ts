import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/resources/api.service';
import { Client } from 'src/app/resources/models/Client';
import { User } from 'src/app/resources/models/User';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../../app.component.css'],
})
export class AuthComponent {
  @ViewChild('signUpForm') public signUpForm: NgForm;
  @ViewChild('loginForm') public loginForm: NgForm;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  //,private apiService : ApiService

  error: string = '';

  public signUp(): void {
    console.log(this.signUpForm.value);
    let newUser: User = new User(
      null,
      this.signUpForm.value.username,
      this.signUpForm.value.email,
      this.signUpForm.value.password,
      '0',
      'USER'
    );
    console.log(newUser);

    let date: Date = new Date(this.signUpForm.value.birthdate);
    let formattedDate = formatDate(date, 'dd-MM-yyyy', 'en-US');

    this.userSignUp(newUser,formattedDate);
    /*  let response = this.authService.userSignUp(newUser)
    console.log("response: " + JSON.stringify(response)) */
    //localStorage.setItem('user', JSON.stringify(res))}
  }

  userSignUp(newUser: User,formattedDate) {
    let response = {};
    let newClient:Client;
    let user: User;
    console.log('Signing up...');
    this.apiService.createUser(newUser).subscribe({
      next: (res) => {

        user = new User(
          res.id,
          res.username,
          res.email,
          res.password,
          res.status,
          res.role
        );

        newUser.id=user.id;
        localStorage.setItem('user', JSON.stringify(newUser));
        console.log(('created user: ' + JSON.stringify(user)));
     //   localStorage.setItem('user', JSON.stringify(user)),
          this.apiService.login(newUser).subscribe({
            next: (res) => {
              console.log(JSON.stringify(res));


              newClient = new Client(null,
                user.id,
                this.signUpForm.value.firstname,
                this.signUpForm.value.lastname,
                this.signUpForm.value.weight,
                this.signUpForm.value.height,
                this.signUpForm.value.gender,
                formattedDate,
                'lifestyle'
              ),
              console.log('new client : '+ JSON.stringify(newClient))
                this.createClient(newClient);
            },
            error: (e) => {
              {
                console.error('Login error: ' + JSON.stringify(e));
                this.error = 'Wrong credentials';
              }
            },
            complete: () => {
              // this.router.navigate(['home'])
            },
          });
      },
      error: (e) => {
        console.error(JSON.stringify(e.error.text));
        this.error = e.error.text;
        // response['error'] =  e.error.text;
      },
      complete: () => {
        // this.router.navigate([''])
      },
    });
    //return response;
  }

  public createClient(newClient) {
    this.apiService.createClient(newClient).subscribe({
      next: (res) => {
        console.log('created client: ' + JSON.stringify(res));
      },
      error: (e) => {
        console.error(JSON.stringify(e.error.text));
        this.error = 'error creating client';
        // response['error'] =  e.error.text;
      },
      complete: () => {
        this.router.navigate(['home']);
      },
    });
  }

  public onLoginClick() {
    console.log(this.loginForm.value);
    let user: User = new User(
      null,
      this.loginForm.value.username,
      '',
      this.loginForm.value.password,
      '0',
      'USER'
    );
    console.log(user);
    this.userLogin(user);
  }

  public userLogin(user) {
    console.log('Loging in...');

    this.apiService.login(user).subscribe({
      next: (res) => {
        console.log(JSON.stringify(res));
        localStorage.setItem('user', JSON.stringify(user));
      },
      error: (e) => {
        {
          console.error('Login error: ' + JSON.stringify(e));
          this.error = 'Wrong credentials';
        }
      },
      complete: () => {
        this.router.navigate(['home']);
      },
    });
  }
}
