import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  durationInSeconds = 5;
  applicationform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    linkedin:new FormControl('', [Validators.required]),
    skills:new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });
  constructor(private bar:MatSnackBar,private homes:HomepageService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // this.bar.open('Applied Successfully', 'OK', {
    //   duration: 5000,
    //   verticalPosition: 'top',
    //   horizontalPosition:'center',
    // });
    alert("applied successfully!!")
    const applicant = this.applicationform.value;
    this.applicationform.controls.name.setValue('');
    this.applicationform.controls.email.setValue('');
    this.applicationform.controls.company.setValue('');
    this.applicationform.controls.linkedin.setValue('');
    this.applicationform.controls.skills.setValue('');
    this.applicationform.controls.year.setValue('');
    this.homes
      .addApplicant(applicant)
      .subscribe((data: any) => console.log(data));
      this.router.navigate(['/companies']);

  }


}
