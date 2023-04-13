import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private _userauthservice:UserAuthService , private router:Router){}

  ngOnInit(){
    this.signUp()
  }

  signIn:any

  signUp(){

    this.signIn=new FormGroup({

      displayname:new FormControl ("",[Validators.required,Validators.minLength(2)]),
      email:new FormControl ("",[Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]) 

    })
  }


  get signUp_details(){
    return this.signIn.controls
  }
  errr=""
  signup:any
  on_Sign_Up(){
    this.signup=JSON.parse(localStorage.getItem("Sign_up_User"))
if(!this.signup){

  if(this.signIn.valid){
    
    console.log(this.signIn.value)
    this._userauthservice.post_Sign_Up_data(this.signIn.value).subscribe((sign_up_res:any)=>{
      
      if(sign_up_res){
        
        console.log("sign_up_res",sign_up_res)
        
        this.signup=localStorage.setItem("Sign_up_User",JSON.stringify(this.signIn.value))
        
        this.router.navigate(['/home'])
        
      }
    })
  }
  
}else{
this.errr="You already Signup"
setTimeout(() => {
  
  this.router.navigate(['/home'])
}, 2000);
}
}

}
