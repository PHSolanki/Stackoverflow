import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  ngOnInit(){
    this.signUp()
  }

  signIn:any

  signUp(){

    this.signIn=new FormGroup({
      name:new FormControl ("",[
        Validators.required,
        Validators.minLength(2)
      ]),
       email:new FormControl ("",[
         Validators.required,
         Validators.email
       ]),
       password: new FormControl('', [
         Validators.required,
         Validators.minLength(8)
       ]),
       confirm_password: new FormControl('', [
         Validators.required,
         Validators.minLength(8),
         this.matchPasswordValidator()
       ]),
       username:new FormControl ("",[
         Validators.required
       ])
   
       })
     }


     get signUp_details(){
      return this.signIn.controls
     }


     onSignUp(){
      
     }


     matchPasswordValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const password = control.root.get('password')?.value;
        const confirmPassword = control.value;
  
        return password === confirmPassword ? null : { matchPassword: { value: control.value } };
      };
    }
}
