import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class TestService {
  count = 0;
  constructor() { }
  addCount(){
    this.count+=1;
    console.log('count:',this.count);
  }

}