import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private httpClient: HttpClient) {}

  adduser(user: any): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + '/adduser',
      JSON.stringify(user),
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
  }
  getUsers(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/users');
  }
  editUser(email: any, updated: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/user/' + email,updated);
  }
  getCompanyData(): Observable<any> {
    return this.httpClient.get(environment.companyUrl);
  }
  addquestion(question: any) {
    return this.httpClient.post(
      environment.baseUrl + '/addquestion',
      JSON.stringify(question),
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
  }
  getQuestions(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/questions');
  }
  getAUsers(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/users');
  }
  addsolution(solution: any) {
    return this.httpClient.post(
      environment.baseUrl + '/addsolution',
      JSON.stringify(solution),
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
  }
  getSolutions(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/solutions');
  }
  updateViewData(id:any,upBody:any){
    return this.httpClient.put(environment.baseUrl+'/updateById/'+id,upBody);
    
  }
  updateVoteData(id:any,upBody:any){
    return this.httpClient.put(environment.baseUrl+'/updateSolById/'+id,upBody);
    
  }
  addcompany(company: any) {
    return this.httpClient.post(
      environment.baseUrl + '/s',
      JSON.stringify(company),
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
  }
  deleteCompany(id:any){
    return this.httpClient.delete(environment.baseUrl + '/deletecompany/' + id);
  }
  addApplicant(applicant:any){
    return this.httpClient.post(
      environment.baseUrl + '/addapplicant',
      JSON.stringify(applicant),
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
  }
}
