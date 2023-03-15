import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  recieveMessage(): any {
    throw new Error('Method not implemented.');
  }
    

  constructor(private http:HttpClient) { }

  
}
