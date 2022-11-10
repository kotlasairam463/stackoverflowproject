import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
import { createIncrementalCompilerHost } from 'typescript';
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
})
export class SolutionComponent implements OnInit {
  id: any = '';
  questions: any = '';
  question: any = '';
  solutions: any = [];
  filtersol: any = [];
  solution:any='';
  constructor(
    private homes: HomepageService,
    private route: Router,
    private rout: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];
    this.homes.getQuestions().subscribe((res) => {
      this.questions = res;
      let index = this.questions.findIndex(
        (qn: { id: string }) => qn.id == this.id
      );
      this.question = this.questions[index];
    });

    this.homes.getSolutions().subscribe((res) => {
      this.solutions = res;
      
      console.log(this.solutions);
      this.filtersol = this.solutions.filter(
        (sol: { qid: string }) => sol.qid == this.id
      );
      console.log(this.filtersol);
    });
  }
  // incrementview(id:any){
  //   let totalViews = (this.question.views)+1;
  //   const updatedata =  { 
  //   views:totalViews
  //   };

  //   this.homes.updateViewData(this.question.id,updatedata).subscribe(x => {
  //     console.log('updated sucessfully');
  //   });
    
  // }
  incrementVotes(id:any) {
    let index = this.solutions.findIndex(
      (sol: { id: string }) =>sol.id == id
    );
    this.solution = this.solutions[index];
    let totalVotes = this.solution.votes+1;
    const updata={
      votes:totalVotes
    };
    this.homes.updateVoteData(this.solution.id,updata).subscribe(x => {
      console.log('updated sucessfully');
    });
    

  }

  yoursolution(id: any) {
    this.route.navigate(['/usersolution/' + id]);
  }
}
