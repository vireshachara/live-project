import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  success_msg = true;
  pass = false;
  fail = true;
  showMassage1 =false;
  user_msg = false;
  Veeresh =true;
  propClass ='c4';

  contact = [
    { 'firstName' : 'Veeresh',
      'MobileNo': '9861536225',
      'placeOfBirth' : 'Sindhanur'
    },
    { 'firstName' : 'Anand',
      'MobileNo': '9583454354',
      'placeOfBirth' : 'Karatagi'
    },
    { 'firstName' : 'janardhan',
      'MobileNo': '997256899',
      'placeOfBirth' : 'Singapur'
    }
  ]
  name = [ 'Ramesh', 'Suresh', 'Mahesh', 'Veeresh']
  population = 12500000 ;
  age = 45;
  styleProp = 'cyan';
  textcolor = 'green';
  //CSS shown for color based on the success or error
  isBoolian =true;
  classProp = 'c3';

  ClassPropMethod(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
