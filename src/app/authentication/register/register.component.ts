import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  postData : any;

  loginForm : any ;

  constructor(private http : HttpClient, private service:SharedService) { }

  ngOnInit(): void { 

    this.loginForm = new FormGroup({
              'f_name': new FormControl("", [Validators.required, Validators.minLength(4)]),
              'l_name': new FormControl("", [Validators.required,Validators.minLength(4)]),
               'email': new FormControl("", [Validators.required, Validators.email]),
           'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
   'confirm_password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
       'phone_number' : new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)])   
    })
  }
 

  get f_name (){
    return this.loginForm.get('f_name')
  }
   
  submitForm(){
    console.log(this.loginForm)
    if (this.loginForm.get('password').value == this.loginForm.get('confirm_password').value) {
      window.alert('Passwords are matching')
      console.log('Password are matching')
    } else 
    {
      window.alert('Passwords are not matching')
      console.log('Password are not matching')
    }

    // this.postData = this.loginForm.value

    // return this.http.post('https://angularproject2022-default-rtdb.firebaseio.com/', this.postData).subscribe(data=>{
    //   console.log(data);
    // })
  }
}
