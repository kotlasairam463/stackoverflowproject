import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companylist: any[] = [];
  email:any='';
  activeUsers:any=[];
  check:boolean=false;
  constructor(private homes: HomepageService, private router: Router) {}

  ngOnInit(): void {
    this.homes.getCompanyData().subscribe(
      (data) => {
        console.log(data);
        this.companylist = data;
      },
      (err) => {
        console.log('err occured:', err);
      }
    );
    this.homes.getAUsers().subscribe((data: any) => {
      this.email=localStorage.getItem("activeuser");
      this.activeUsers = data.filter(
        (user: any) =>
          user.email === this.email 
      );
      if(this.email==environment.admin){
        this.check=true;
      }
    });
  }
addCompany(){
  this.router.navigate(['\addcompany']);
}
  applyFun(id:any){
    this.router.navigate(['/application/'+id])
  }
  delFun(id:any){
    this.homes.deleteCompany(id).subscribe((data)=>console.log(data));
  }
}
