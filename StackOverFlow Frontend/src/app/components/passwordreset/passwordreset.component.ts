import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css'],
})
export class PasswordresetComponent implements OnInit {
  passwordform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    // code: new FormControl('',[Validators.required]),
    newpassword: new FormControl('', [Validators.required]),
  });

  constructor(private homes: HomepageService, private router: Router) {}
  userlist: any = [];
  name:any='';
  email: any='';
  pwd:any=''
  ngOnInit(): void {}
  onSubmit() {
    const userData = this.passwordform.value;
    console.log(userData.email);
    this.homes.getUsers().subscribe((data: any) => {
      this.userlist = data.filter((user: any) => user.email === userData.email);
      console.log(this.userlist);
      console.log(this.email);
      this.name=this.userlist[0].fullname;
      this.email = this.passwordform.controls.email.value;
      this.pwd = this.passwordform.controls.newpassword.value;
      const updated = {
        fullname:this.name,
        email: this.email,
        password: this.pwd,
      };
      console.log(updated);
      this.passwordform.controls.email.setValue('');
      this.passwordform.controls.newpassword.setValue('');
      this.homes
        .editUser(this.email, updated)
        .subscribe((data) => console.log(data));
      this.router.navigate(['/login']);
    });
  }
}
