import { Component } from '@angular/core';
import  data  from '../assets/index.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  json_variable : any;
  opened = false

  constructor(){
    console.log("Json File", data)
    this.json_variable = console.log(data.family)
  }


  ngOnInIt(): void {

    for (var i=0; i < this.json_variable.length ; i++){
      console.log(this.json_variable[i])
    }
  }



}

