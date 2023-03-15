import { Component, OnInit } from '@angular/core';

// 1st Step (Import SharedService)
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title: any;

  // 2st Step ( private sharedservice : SharedService)
  constructor(private sharedservice: SharedService) {}

  ngOnInit(): void {
    // 3rd Step ( this.title = this.sharedservice.recieveMessage())

    this.title = this.sharedservice.recieveMessage();
  }
}
