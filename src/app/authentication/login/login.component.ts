import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email="vireshachara18@gmail.com";
  password="viresh123@#";

  
  errorMessage :any ;
  errorMessage1 :any ;
  firstname : any;
  value: any;

  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  submitForm(form :any){
    if(form.value.email === 'vireshachara18@gmail.com' && form.value.password === '123456'){
    console.log(form);
    localStorage.setItem('email',form.value.email);
    localStorage.setItem('password',form.value.password);
    this.errorMessage = false;
    this.errorMessage1 = false;
    this.router.navigate(["/dashboard"])
    }
    else{
    alert("Log in credentials are not valid");
    this.errorMessage = true;
    this.errorMessage1 = true
    }
  }
}

