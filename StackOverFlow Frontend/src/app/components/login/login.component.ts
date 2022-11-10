import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private homes: HomepageService, private router: Router) {}

  ngOnInit(): void {}
  userlist: any = [];
  useremail:any='';
  username:any='';
  onSubmit() {
    const userData = this.loginform.value;
this.useremail=this.loginform.controls.email.value;

    this.loginform.controls.email.setValue('');
    this.loginform.controls.password.setValue('');
    this.homes.getUsers().subscribe((data: any) => {
      this.userlist = data.filter(
        (user: any) =>
          user.email === userData.email && user.password === userData.password
      );
      if (this.userlist.length == 1) {
        localStorage.setItem("token","abcd");
        localStorage.setItem("activeuser",this.useremail); 
        this.router.navigate(['/main']);
      } else {
        alert('Please Enter correct details');
      }
    });
  }
}
