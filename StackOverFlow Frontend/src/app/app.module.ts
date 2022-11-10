import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CompanyComponent } from './components/company/company.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { AskquestionComponent } from './components/askquestion/askquestion.component';
import { SolutionComponent } from './components/solution/solution.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersolutionComponent } from './components/usersolution/usersolution.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { ApplicationComponent } from './components/application/application.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    UserprofileComponent,
    QuestionsComponent,
    CompanyComponent,
    PasswordresetComponent,
    AskquestionComponent,
    SolutionComponent,
    UsersolutionComponent,
    AddcompanyComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
