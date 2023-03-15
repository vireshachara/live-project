import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

 
  sidenavVariable = "/home";

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(["/home"])
  }

}
