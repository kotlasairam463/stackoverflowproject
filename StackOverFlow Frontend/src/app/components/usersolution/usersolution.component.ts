import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-usersolution',
  templateUrl: './usersolution.component.html',
  styleUrls: ['./usersolution.component.css'],
})
export class UsersolutionComponent implements OnInit {
  solutionform = new FormGroup({
    qid: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  });
  constructor(
    private homes: HomepageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: any = '';
  questions: any = '';
  question: any = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.homes.getQuestions().subscribe((res) => {
      this.questions = res;
      let index = this.questions.findIndex(
        (qn: { id: string }) => qn.id == this.id
      );
      this.question = this.questions[index];
    });
  }
  onSubmit() {
    const solution = this.solutionform.value;
    this.solutionform.controls.qid.setValue('');
    this.solutionform.controls.code.setValue('');
    this.homes
      .addsolution(solution)
      .subscribe((data: any) => console.log(data));
    this.router.navigate(['/main']);
  }
}
