import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){
    this.router.events.subscribe((res:any)=>{
      if(res){
        if(res.url){
          let login_user = JSON.parse(localStorage.getItem('Login cred')!)
          if(login_user){
            this.btn=""
            
            this.Registered_User=false
          }else{
            this.btn="Login"
            this.Registered_User=true
          }
          // let Register_user=JSON.parse(localStorage.getItem('Sign_up_user')!)
          // if(Register_user){
          // }else{
          // }
        }
      }
    })
  }

  ngOninit(){
    
  }

  btn:any="Login";
 
  Registered_User:boolean=true;

  logout(){
    localStorage.removeItem("Login cred")
    localStorage.removeItem("Sign_up_User")
    this.router.navigate(["/home"])
  }



}
