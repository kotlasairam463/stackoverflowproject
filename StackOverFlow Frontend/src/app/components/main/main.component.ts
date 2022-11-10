import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchItem = '';
  filteredData: any = [];
  data: any = [];
  check: boolean = false;
  tags: any = [];
  question: any = '';
  constructor(private homes: HomepageService, private route: Router) {}
  ngOnInit(): void {
    this.homes.getQuestions().subscribe((data: any) => {
      this.data = data;
      this.filteredData = this.data;
    });
  }

  filterData(e: Event) {
    this.filteredData = this.data.filter((question: any) => {
      if (
        question.question
          .trim()
          .toLowerCase()
          .includes(this.searchItem.trim().toLowerCase())
      ) {
        return true;
      }
      for (let tag of question.tags) {
        if (
          tag
            .trim()
            .toLowerCase()
            .includes(this.searchItem.trim().toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }

  specificqn(id: any) {
    let index = this.data.findIndex((qn: { id: string }) => qn.id == id);
    this.question = this.data[index];
    let totalViews = this.question.views + 1;
    const updatedata = {
      views: totalViews,
    };
    this.homes.updateViewData(this.question.id, updatedata).subscribe((x) => {
      console.log('updated sucessfully');
    });
    this.route.navigate(['/solution/' + id]);
  }
  logout() {
    console.log('logout');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('activeuser');
  }
}
