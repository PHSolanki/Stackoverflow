import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _userauthservice:UserAuthService,private router:Router){}

  ngOnInit() {
    this.Login_Form();   
  }

  message:any
  user_login:any
   
   
  Login_Form(){

    this.user_login=new FormGroup({

      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),

    });

  }

  get get_user_login_details() {
    return this.user_login.controls;
  }
     
  Save_User_Login() {
        
    console.log("Login Data",this.user_login.value)
  
    this._userauthservice.get_Sign_Up_data().subscribe((sign_up_data_res:any)=>{

      sign_up_data_res= sign_up_data_res.find((user:any)=>user.email===this.user_login.value.email)

      console.log("Register_res_get",sign_up_data_res)

      if(sign_up_data_res){

        if((sign_up_data_res.email==this.user_login.value.email) && (sign_up_data_res.password==this.user_login.value.password)){

          this._userauthservice.get_Login_data(this.user_login.value)

          localStorage.setItem("Login cred" , JSON.stringify(this.user_login.value))
       
          this.router.navigate(['/home']);  
          this.message=""

        }else{
          this.message = "Invalid Credential "
        }
      }
  
    })
  }
}
