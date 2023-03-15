import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  title = '1. one way Data-binding';
  title2 = '2.Two way Data-binding';
  title3 = 'Mamata';
  page_count = 20;
  colVal = 2;
  user_object = { first_name: 'Viresh', last_name: 'Achari' };
  array = [55, 568, 5456, 'Veeresh', 'Bangalore', 55];
  user = { first_name: 'Anand', last_name: 'Shettty' };
  isUserLoggedIn = true;
  showMassage: any;
  isUserAuth: boolean = true;
  user_name = '';
  twoWay: any;
  isUserFor = true;
  user1: any;
  errormassage: any;
  user2: string = 'Veeresh';
  contact = [
    { firstName: 'Veeresh', MobileNo: '9861536225', placeOfBirth: 'Sindhanur' },
    { firstName: 'Anand', MobileNo: '9583454354', placeOfBirth: 'Karatagi' },
  ];
  highlightBgColor() {
    console.log('Highlight the BG Color');
  }
  focusOn() {
    console.log('Enter the Name');
  }
  constructor() {
    this.twoWay = 'Two way data binding ';
  }

  ngOnInit(): void {}

  getUser1(event: any) {
    console.log(this.user1);
    if (this.user1 == 'veeresh') {
      window.alert('Logged in Succesfully');   
      this.errormassage = false;
    } else {
      window.alert('User Name Entered is Wrong');
      this.errormassage = true;
    }
  }

  sayHello() {
    if (this.isUserAuth == true) {
      this.showMassage = true;
    } else {
      this.showMassage = false;
    }
    // console.log("Hello new world of Angular");
    // this.router.navigate(['/sayHello'])
  }
}