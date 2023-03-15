import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  lowerCaseExample = "CONVERT UPPER CASE WORDS TO LOWER CASE WORDS";
  upperCaseExample = "convert lower case words to upper case words";
  dateExample = new Date()     // Date.now() also we can write
  jsonExample = { username: "arc", major: "Angular", experience: 10};
  currencyExample = 125;
  percentExample = 0.675869 ;
  name = 'veeresh';
  slice = "Bangalore and mysore"


  constructor() { }

  ngOnInit(): void {
  }

}