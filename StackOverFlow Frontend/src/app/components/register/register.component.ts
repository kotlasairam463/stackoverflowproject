import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerform = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private homes: HomepageService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    const user = this.registerform.value;
    this.registerform.controls.fullname.setValue('');
    this.registerform.controls.email.setValue('');
    this.registerform.controls.password.setValue('');
    this.homes.adduser(user).subscribe((data: any) => console.log(data));
    this.router.navigate(['/login']);
  }
}
