import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CompanyComponent } from './components/company/company.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { AskquestionComponent } from './components/askquestion/askquestion.component';
import { SolutionComponent } from './components/solution/solution.component';
import { UsersolutionComponent } from './components/usersolution/usersolution.component';
import { AuthGuard } from './services/auth.guard';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { ApplicationComponent } from './components/application/application.component';
const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'main',component:MainComponent,canActivate:[AuthGuard]},
  {path:'companies',component:CompanyComponent,canActivate:[AuthGuard]},
  {path:'userprofile',component:UserprofileComponent,canActivate:[AuthGuard]},
  {path:'questions',component:QuestionsComponent,canActivate:[AuthGuard]},
  {path:'askquestion',component:AskquestionComponent,canActivate:[AuthGuard]},
  {path:'solution/:id',component:SolutionComponent,canActivate:[AuthGuard]},
  {path:'usersolution/:id',component:UsersolutionComponent,canActivate:[AuthGuard]},
  {path:'addcompany',component:AddcompanyComponent,canActivate:[AuthGuard]},
  {path:'application/:id',component:ApplicationComponent,canActivate:[AuthGuard]},
  {path:'passwordreset',component:PasswordresetComponent},
  {path:'',redirectTo:'\home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
