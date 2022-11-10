import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(private homes: HomepageService, private route: Router) {}
  questionsList: any = [];
  question:any=''
  ngOnInit(): void {
    this.homes.getQuestions().subscribe((data: any) => {
      this.questionsList = data;
      console.log(this.questionsList);
    });
  }
  askqn() {
    this.route.navigate(['askquestion']);
  }
  specificqn(id: any) {
    console.log('id received');
    console.log(id);
    let index = this.questionsList.findIndex(
      (qn: { id: string }) =>qn.id == id
    );
    this.question = this.questionsList[index];
    let totalViews = (this.question.views)+1;
    const updatedata =  { 
    views:totalViews
    };
    this.homes.updateViewData(this.question.id,updatedata).subscribe(x => {
      console.log('updated sucessfully');
    });
    this.route.navigate(['/solution/' + id]);
  }
}
