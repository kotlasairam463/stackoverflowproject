import { Call } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  constructor(private homes: HomepageService, private route: Router) {}
  activeUsers: any = '';
  data: any = [];
  email: any = '';
  question:any='';
  ngOnInit(): void {
    this.email=localStorage.getItem("activeuser");
    this.homes.getAUsers().subscribe((data: any) => {
      this.activeUsers = data.filter(
        (user: any) =>
          user.email === this.email 
      );
      console.log(this.activeUsers)
      // this.email = data[data.length - 1].email;
      console.log(this.email);
    });
    this.homes.getQuestions().subscribe((data1: any) => {
      this.data = data1.filter((question: any) => question.email == this.email);
      console.log(this.data);
    });
  }
  specificqn(id: any) {
    let index = this.data.findIndex(
      (qn: { id: string }) =>qn.id == id
    );
    this.question = this.data[index];
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
