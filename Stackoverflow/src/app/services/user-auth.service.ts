import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SignUpModel } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http : HttpClient) { }

  baseurl=environment.baseurl
  signup=environment.signup

  post_Sign_Up_data(data:SignUpModel){
    
    try {
      return this.http.post<SignUpModel>(this.baseurl+this.signup,data,{observe:"response"})
    } catch (error:any) {
      return throwError(() => new Error('test'))
    }

  }

  get_Sign_Up_data(){

    try {
      return this.http.get<SignUpModel>(this.baseurl+this.signup)
    } catch (error:any) {
      return throwError(() => new Error('test'))
    }

  }

  get_Login_data(data:any){

    try {
      return localStorage.setItem("Login_User",JSON.stringify(data))
    } catch (error:any) {
      return throwError(() => new Error(error))
    }

  }

  

  

}
