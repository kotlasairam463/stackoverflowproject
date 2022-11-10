
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  addcompanyform = new FormGroup({
    img: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    location:new FormControl('', [Validators.required]),
    skills:new FormControl('', [Validators.required]),
    vacancies: new FormControl('', [Validators.required]),
  });

  constructor(private homes:HomepageService,private router:Router) { }

  ngOnInit(): void {
  
  }
  onSubmit() {
    const company = this.addcompanyform.value;
    this.addcompanyform.controls.img.setValue('');
    this.addcompanyform.controls.name.setValue('');
    this.addcompanyform.controls.position.setValue('');
    this.addcompanyform.controls.location.setValue('');
    this.addcompanyform.controls.skills.setValue('');
    this.addcompanyform.controls.vacancies.setValue('');

    this.homes.addcompany(company).subscribe((data: any) => console.log(data));
    this.router.navigate(['/companies']);
  }


}
