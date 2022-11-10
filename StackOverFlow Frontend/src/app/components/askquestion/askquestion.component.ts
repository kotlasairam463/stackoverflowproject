import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css'],
})
export class AskquestionComponent implements OnInit {
  doubtform = new FormGroup({
    question: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(private homes: HomepageService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    const question = this.doubtform.value;
    this.doubtform.controls.question.setValue('');
    this.doubtform.controls.description.setValue('');
    this.doubtform.controls.code.setValue('');
    this.doubtform.controls.tags.setValue('');
    this.doubtform.controls.email.setValue('');
    this.homes
      .addquestion(question)
      .subscribe((data: any) => console.log(data));
    this.route.navigate(['/main']);
  }
}
